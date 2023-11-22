import RunningReport from "../components/RunningReport/RunningReport";

import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof RunningReport> = {
  component: RunningReport,
};

export default meta;
type Story = StoryObj<typeof RunningReport>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const RunningReportState: Story = {
  name: "Default State",
  storyName: "Running Report",
  tags: ["autodocs"],
};
