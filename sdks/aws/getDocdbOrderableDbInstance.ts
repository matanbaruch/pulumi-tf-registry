// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getDocdbOrderableDbInstance(args?: GetDocdbOrderableDbInstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetDocdbOrderableDbInstanceResult> {
    args = args || {};

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("aws:index/getDocdbOrderableDbInstance:getDocdbOrderableDbInstance", {
        "engine": args.engine,
        "engineVersion": args.engineVersion,
        "id": args.id,
        "instanceClass": args.instanceClass,
        "licenseModel": args.licenseModel,
        "preferredInstanceClasses": args.preferredInstanceClasses,
        "vpc": args.vpc,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getDocdbOrderableDbInstance.
 */
export interface GetDocdbOrderableDbInstanceArgs {
    engine?: string;
    engineVersion?: string;
    id?: string;
    instanceClass?: string;
    licenseModel?: string;
    preferredInstanceClasses?: string[];
    vpc?: boolean;
}

/**
 * A collection of values returned by getDocdbOrderableDbInstance.
 */
export interface GetDocdbOrderableDbInstanceResult {
    readonly availabilityZones: string[];
    readonly engine?: string;
    readonly engineVersion: string;
    readonly id: string;
    readonly instanceClass: string;
    readonly licenseModel?: string;
    readonly preferredInstanceClasses?: string[];
    readonly vpc: boolean;
}
export function getDocdbOrderableDbInstanceOutput(args?: GetDocdbOrderableDbInstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetDocdbOrderableDbInstanceResult> {
    return pulumi.output(args).apply((a: any) => getDocdbOrderableDbInstance(a, opts))
}

/**
 * A collection of arguments for invoking getDocdbOrderableDbInstance.
 */
export interface GetDocdbOrderableDbInstanceOutputArgs {
    engine?: pulumi.Input<string>;
    engineVersion?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    instanceClass?: pulumi.Input<string>;
    licenseModel?: pulumi.Input<string>;
    preferredInstanceClasses?: pulumi.Input<pulumi.Input<string>[]>;
    vpc?: pulumi.Input<boolean>;
}
