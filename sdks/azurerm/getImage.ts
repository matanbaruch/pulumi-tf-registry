// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getImage(args: GetImageArgs, opts?: pulumi.InvokeOptions): Promise<GetImageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("azurerm:index/getImage:getImage", {
        "id": args.id,
        "name": args.name,
        "nameRegex": args.nameRegex,
        "resourceGroupName": args.resourceGroupName,
        "sortDescending": args.sortDescending,
        "timeouts": args.timeouts,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getImage.
 */
export interface GetImageArgs {
    id?: string;
    name?: string;
    nameRegex?: string;
    resourceGroupName: string;
    sortDescending?: boolean;
    timeouts?: inputs.GetImageTimeouts;
}

/**
 * A collection of values returned by getImage.
 */
export interface GetImageResult {
    readonly dataDisks: outputs.GetImageDataDisk[];
    readonly id: string;
    readonly location: string;
    readonly name?: string;
    readonly nameRegex?: string;
    readonly osDisks: outputs.GetImageOsDisk[];
    readonly resourceGroupName: string;
    readonly sortDescending?: boolean;
    readonly tags: {[key: string]: string};
    readonly timeouts?: outputs.GetImageTimeouts;
    readonly zoneResilient: boolean;
}
export function getImageOutput(args: GetImageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetImageResult> {
    return pulumi.output(args).apply((a: any) => getImage(a, opts))
}

/**
 * A collection of arguments for invoking getImage.
 */
export interface GetImageOutputArgs {
    id?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameRegex?: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    sortDescending?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.GetImageTimeoutsArgs>;
}
