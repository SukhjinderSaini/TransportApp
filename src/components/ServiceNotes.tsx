import React, { useState, useEffect, useMemo } from "react";
import { Form, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

interface Props {
  serviceName: string;
}

function ServiceNotes({ serviceName }: Props) {
  const [notes, setNotes] = useState<string[]>([]);
  const [newNote, setNewNote] = useState("");

  const validateAndAdd = () => {
    if (newNote && newNote.length > 0) {
      const note = newNote;
      addNote(note);
    }
    setNewNote("");
  };

  const textAreaChange = (event: { target: { value: string } }) => {
    const value = event.target.value;
    setNewNote(value);
  };

  const storedNotes = useMemo(() => {
    return localStorage.getItem(serviceName + "_notes")
      ? JSON.parse(localStorage.getItem(serviceName + "_notes"))
      : [];
  }, [serviceName]);

  const addNote = (notesValue: string) => {
    let existingNotes = localStorage.getItem(serviceName + "_notes")
      ? JSON.parse(localStorage.getItem(serviceName + "_notes"))
      : [];
    existingNotes = [...existingNotes, notesValue];
    setNotes(existingNotes);
    localStorage.setItem(serviceName + "_notes", JSON.stringify(existingNotes));
  };

  useEffect(() => {
    setNotes(storedNotes);
  }, [storedNotes]);

  return (
    <>
      {notes.length > 0 && (
        <div className="mt-3 text-start">
          <h5>Notes for {serviceName}</h5>
        </div>
      )}
      <ListGroup>
        {notes.length > 0 &&
          notes.map((note, index) => (
            <ListGroup.Item className="text-start text-break" key={index}>
              <span>{note}</span>
            </ListGroup.Item>
          ))}
      </ListGroup>
      <Form.Control
        value={newNote}
        onChange={textAreaChange}
        className="mt-3 mb-3"
        as="textarea"
        aria-label="With textarea"
        placeholder="Enter notes here"
      />

      <div className="text-start mb-3 flex-grow">
        <Button
          disabled={newNote === ""}
          onClick={validateAndAdd}
          variant="primary mt-2">
          Save Notes
        </Button>
      </div>
    </>
  );
}

export default ServiceNotes;
