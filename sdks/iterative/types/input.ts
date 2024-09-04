// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface CmlRunnerTimeouts {
    create?: pulumi.Input<string>;
    delete?: pulumi.Input<string>;
    update?: pulumi.Input<string>;
}

export interface MachineTimeouts {
    create?: pulumi.Input<string>;
    delete?: pulumi.Input<string>;
}

export interface TaskStorage {
    container?: pulumi.Input<string>;
    containerOpts?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    excludes?: pulumi.Input<pulumi.Input<string>[]>;
    output?: pulumi.Input<string>;
    workdir?: pulumi.Input<string>;
}

export interface TaskTimeouts {
    create?: pulumi.Input<string>;
    delete?: pulumi.Input<string>;
    read?: pulumi.Input<string>;
    update?: pulumi.Input<string>;
}
