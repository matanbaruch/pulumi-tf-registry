// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface AddressesAddress {
    /**
     * FQDN for the address object.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * Name of the address object.
     */
    name: pulumi.Input<string>;
}

export interface GetAddressesAddress {
    /**
     * FQDN for the address object.
     */
    fqdn?: string;
    /**
     * Name of the address object.
     */
    name?: string;
}

export interface GetAddressesAddressArgs {
    /**
     * FQDN for the address object.
     */
    fqdn?: pulumi.Input<string>;
    /**
     * Name of the address object.
     */
    name?: pulumi.Input<string>;
}
