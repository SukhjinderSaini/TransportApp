import ServiceNotes from "../components/Notes/ServiceNotes";

import type { Meta, StoryObj } from "@storybook/react";
const meta: Meta<typeof ServiceNotes> = {
  component: ServiceNotes,
};

export default meta;
type Story = StoryObj<typeof ServiceNotes>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const AddNotes: Story = {
  name: "Notes",
  storyName: "Add Notes",
  tags: ["autodocs"],
  args: {
    serviceName: "Sydney Buses",
  },
};
