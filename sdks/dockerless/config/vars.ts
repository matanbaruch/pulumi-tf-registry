// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("dockerless");

export declare const registryAuth: {[key: string]: outputs.config.RegistryAuth} | undefined;
Object.defineProperty(exports, "registryAuth", {
    get() {
        return __config.getObject<{[key: string]: outputs.config.RegistryAuth}>("registryAuth");
    },
    enumerable: true,
});

