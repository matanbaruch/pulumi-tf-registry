// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ClosTimeouts {
    delete?: pulumi.Input<string>;
}

export interface RouterConfigLicense {
    hash: pulumi.Input<string>;
    path: pulumi.Input<string>;
    type: pulumi.Input<string>;
}

export interface RouterConfigTimeouts {
    create?: pulumi.Input<string>;
    delete?: pulumi.Input<string>;
}

export interface RouterStatusTimeouts {
    delete?: pulumi.Input<string>;
}

export interface TopologyTimeouts {
    delete?: pulumi.Input<string>;
}

export interface VpcConfigTimeouts {
    create?: pulumi.Input<string>;
    delete?: pulumi.Input<string>;
}

export interface VpcStatusTimeouts {
    delete?: pulumi.Input<string>;
}

export interface WanTimeouts {
    delete?: pulumi.Input<string>;
}
