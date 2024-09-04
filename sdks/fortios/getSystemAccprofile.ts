// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSystemAccprofile(args: GetSystemAccprofileArgs, opts?: pulumi.InvokeOptions): Promise<GetSystemAccprofileResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("fortios:index/getSystemAccprofile:getSystemAccprofile", {
        "id": args.id,
        "name": args.name,
        "vdomparam": args.vdomparam,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSystemAccprofile.
 */
export interface GetSystemAccprofileArgs {
    id?: string;
    name: string;
    vdomparam?: string;
}

/**
 * A collection of values returned by getSystemAccprofile.
 */
export interface GetSystemAccprofileResult {
    readonly admintimeout: number;
    readonly admintimeoutOverride: string;
    readonly authgrp: string;
    readonly cliConfig: string;
    readonly cliDiagnose: string;
    readonly cliExec: string;
    readonly cliGet: string;
    readonly cliShow: string;
    readonly comments: string;
    readonly ftviewgrp: string;
    readonly fwgrp: string;
    readonly fwgrpPermissions: outputs.GetSystemAccprofileFwgrpPermission[];
    readonly id: string;
    readonly loggrp: string;
    readonly loggrpPermissions: outputs.GetSystemAccprofileLoggrpPermission[];
    readonly name: string;
    readonly netgrp: string;
    readonly netgrpPermissions: outputs.GetSystemAccprofileNetgrpPermission[];
    readonly scope: string;
    readonly secfabgrp: string;
    readonly sysgrp: string;
    readonly sysgrpPermissions: outputs.GetSystemAccprofileSysgrpPermission[];
    readonly systemDiagnostics: string;
    readonly systemExecuteSsh: string;
    readonly systemExecuteTelnet: string;
    readonly utmgrp: string;
    readonly utmgrpPermissions: outputs.GetSystemAccprofileUtmgrpPermission[];
    readonly vdomparam?: string;
    readonly vpngrp: string;
    readonly wanoptgrp: string;
    readonly wifi: string;
}
export function getSystemAccprofileOutput(args: GetSystemAccprofileOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSystemAccprofileResult> {
    return pulumi.output(args).apply((a: any) => getSystemAccprofile(a, opts))
}

/**
 * A collection of arguments for invoking getSystemAccprofile.
 */
export interface GetSystemAccprofileOutputArgs {
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
