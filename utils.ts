import { createDefine } from "@fresh/core";

export interface State {
	title: string;
}

export const define = createDefine<State>();
