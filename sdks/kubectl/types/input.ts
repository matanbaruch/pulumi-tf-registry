// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ManifestTimeouts {
    create?: pulumi.Input<string>;
}

export interface ProviderExec {
    apiVersion: pulumi.Input<string>;
    args?: pulumi.Input<pulumi.Input<string>[]>;
    command: pulumi.Input<string>;
    env?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
export namespace config {
}
