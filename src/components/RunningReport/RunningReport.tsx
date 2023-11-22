import React, { useState, useEffect } from "react";
import "./RunningReport.css";
import { BusRunningStatus, BusRunningInfo } from "./RunningReport.types";
import RouteVariant from "./RouteVariant";
import ServiceNotes from "../ServiceNotes";
import { Table, Accordion } from "react-bootstrap";
import { FaRegCaretSquareDown, FaRegCaretSquareUp } from "react-icons/fa";
import { BsCaretUpFill, BsCaretDownFill } from "react-icons/bs";

function RunningReport() {
  const [busData, setBusData] = useState<BusRunningStatus[]>();
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const fetchServiceData = async () => {
    const bus_service_call = await fetch("/data/bus-services-data.json");
    const bus_service_data = await bus_service_call.json();
    return bus_service_data.data;
  };
  useEffect(() => {
    fetchServiceData().then((data) => {
      setBusData(data);
    });
  }, []);
  const handleAccordionClick = (index: string) => {
    const updateIndex = activeKey === index ? null : index;
    setActiveKey(updateIndex);
  };
  return (
    <>
      <div className="d-flex flex-column m-sm-3 m-md-5">
        <div className="display-6 fw-normal text-start">Bus Reports</div>
        <div className="aling-items-center justify-content-center mt-3">
          {busData &&
            Array.isArray(busData) &&
            busData.length > 0 &&
            busData.map((serviceData: BusRunningStatus, index) => (
              <Accordion
                flush
                className="ma-5"
                key={serviceData.organisation + "_" + index}
                defaultActiveKey="1"
                activeKey={activeKey}>
                <Accordion.Item eventKey={index.toString()}>
                  <Accordion.Header
                    onClick={() => {
                      handleAccordionClick(index.toString());
                    }}>
                    <div className="d-flex w-100">
                      <div className="h3 fw-normal m-0">
                        {serviceData.organisation + " - " + serviceData.date}
                      </div>

                      <div className="flex-grow-1 align-self-center text-end">
                        {activeKey === index.toString() ? (
                          <BsCaretUpFill
                            className="caret_border"
                            size={22}></BsCaretUpFill>
                        ) : (
                          <BsCaretDownFill
                            className="caret_border"
                            size={22}></BsCaretDownFill>
                        )}
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Table
                      style={{ borderTop: "1px solid #ccc" }}
                      className="fw-light text-start"
                      responsive="sm">
                      <thead>
                        <tr>
                          <th>Bus ID</th>
                          <th>Route Variant</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {serviceData.busData.map(
                          (busRunningInfo: BusRunningInfo) => (
                            <tr key={busRunningInfo.busId}>
                              <td>{busRunningInfo.busId}</td>
                              <td>
                                <RouteVariant
                                  formatString={
                                    busRunningInfo.routeVariant
                                  }></RouteVariant>
                              </td>
                              <td>
                                {busRunningInfo.deviationFromTimetable ===
                                  null ||
                                busRunningInfo.deviationFromTimetable === 0 ? (
                                  <span className="text-success">On Time</span>
                                ) : busRunningInfo.deviationFromTimetable >
                                  0 ? (
                                  <span className="text-primary">Late</span>
                                ) : (
                                  <span className="text-danger">Early</span>
                                )}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </Table>
                    <ServiceNotes serviceName={serviceData.organisation} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
        </div>
      </div>
    </>
  );
}
export default RunningReport;
