/* -------------------------------------------------------- *\
*                                                          *
*      ███╗░░░███╗░█████╗░░██████╗██╗░░██╗██╗███╗░░██╗     *
*      ████╗░████║██╔══██╗██╔════╝██║░░██║██║████╗░██║     *
*      ██╔████╔██║███████║╚█████╗░███████║██║██╔██╗██║     *
*      ██║╚██╔╝██║██╔══██║░╚═══██╗██╔══██║██║██║╚████║     *
*      ██║░╚═╝░██║██║░░██║██████╔╝██║░░██║██║██║░╚███║     *
*      ╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═════╝░╚═╝░░╚═╝╚═╝╚═╝░░╚══╝     *
*                                         by Nutshimit     *
* -------------------------------------------------------- *
*                                                          *
*   This file is generated automatically by mashin.        *
*   Do not edit manually.                                  *
*                                                          *
\* ---------------------------------------------------------*/
import {
	Resource as MashinResource,
	Provider as MashinProvider,
	getFileName,
	Inputs,
	Outputs,
	ResourceName,
	ResourceOptions,
 } from "https://mashin.run/std@0.1.0/sdk/mod.ts";

export const VERSION = "0.1.1";
const LOCAL_PATH = Deno.env.get("LOCAL_PLUGIN")
   ? "./target/debug/mashin_provider_starter.dll"
   : await globalThis.__mashin.downloadProvider(
      "github",
      new URL(
         getFileName("mashin_provider_starter"),
         `https://github.com/nutshimit/mashin_provider_starter/releases/download/v${VERSION}/`
      ).toString()
   );

export interface MyResourceOutputs extends Outputs {
/**
  * My resource key
  **/
  myKey: string | undefined | null;
}

/**
  * This is my resource documentation
  **/
export class MyResource<T extends Lowercase<string>> extends MashinResource<MyResourceOutputs, T> {
   #props: MyResourceConfig;
   constructor(
      name: ResourceName<T>,
      props: MyResourceConfig,
      opts: ResourceOptions
   ) {
      super(name, "my_resource", props, opts);
      this.#props = props;
   }

   get props() {
      return this.#props;
   }
}

export interface MashinProviderStarterConfig extends Inputs {
  version: number;
}
/**
  * This is my resource config
  **/
export interface MyResourceConfig extends Inputs {
/**
  * My config key
  **/
  myKey: string | undefined | null;
}

/**
  * This is my provider documentation
  * Which support multiline
  **/
export class Provider extends MashinProvider {
   constructor(name: string, args?: MashinProviderStarterConfig) {
      super(name, LOCAL_PATH as string, args);
   }
}
