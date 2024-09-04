// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getRumWebVitalsPage(args: GetRumWebVitalsPageArgs, opts?: pulumi.InvokeOptions): Promise<GetRumWebVitalsPageResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getRumWebVitalsPage:getRumWebVitalsPage", {
        "area": args.area,
        "brand": args.brand,
        "browser": args.browser,
        "costType": args.costType,
        "device": args.device,
        "endTime": args.endTime,
        "engine": args.engine,
        "env": args.env,
        "extFirst": args.extFirst,
        "extSecond": args.extSecond,
        "extThird": args.extThird,
        "from": args.from,
        "id": args.id,
        "isAbroad": args.isAbroad,
        "isp": args.isp,
        "level": args.level,
        "netType": args.netType,
        "os": args.os,
        "platform": args.platform,
        "projectId": args.projectId,
        "resultOutputFile": args.resultOutputFile,
        "startTime": args.startTime,
        "type": args.type,
        "versionNum": args.versionNum,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getRumWebVitalsPage.
 */
export interface GetRumWebVitalsPageArgs {
    area?: string;
    brand?: string;
    browser?: string;
    costType?: string;
    device?: string;
    endTime: number;
    engine?: string;
    env?: string;
    extFirst?: string;
    extSecond?: string;
    extThird?: string;
    from?: string;
    id?: string;
    isAbroad?: string;
    isp?: string;
    level?: string;
    netType?: string;
    os?: string;
    platform?: string;
    projectId: number;
    resultOutputFile?: string;
    startTime: number;
    type?: string;
    versionNum?: string;
}

/**
 * A collection of values returned by getRumWebVitalsPage.
 */
export interface GetRumWebVitalsPageResult {
    readonly area?: string;
    readonly brand?: string;
    readonly browser?: string;
    readonly costType?: string;
    readonly device?: string;
    readonly endTime: number;
    readonly engine?: string;
    readonly env?: string;
    readonly extFirst?: string;
    readonly extSecond?: string;
    readonly extThird?: string;
    readonly from?: string;
    readonly id: string;
    readonly isAbroad?: string;
    readonly isp?: string;
    readonly level?: string;
    readonly netType?: string;
    readonly os?: string;
    readonly platform?: string;
    readonly projectId: number;
    readonly result: string;
    readonly resultOutputFile?: string;
    readonly startTime: number;
    readonly type?: string;
    readonly versionNum?: string;
}
export function getRumWebVitalsPageOutput(args: GetRumWebVitalsPageOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetRumWebVitalsPageResult> {
    return pulumi.output(args).apply((a: any) => getRumWebVitalsPage(a, opts))
}

/**
 * A collection of arguments for invoking getRumWebVitalsPage.
 */
export interface GetRumWebVitalsPageOutputArgs {
    area?: pulumi.Input<string>;
    brand?: pulumi.Input<string>;
    browser?: pulumi.Input<string>;
    costType?: pulumi.Input<string>;
    device?: pulumi.Input<string>;
    endTime: pulumi.Input<number>;
    engine?: pulumi.Input<string>;
    env?: pulumi.Input<string>;
    extFirst?: pulumi.Input<string>;
    extSecond?: pulumi.Input<string>;
    extThird?: pulumi.Input<string>;
    from?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    isAbroad?: pulumi.Input<string>;
    isp?: pulumi.Input<string>;
    level?: pulumi.Input<string>;
    netType?: pulumi.Input<string>;
    os?: pulumi.Input<string>;
    platform?: pulumi.Input<string>;
    projectId: pulumi.Input<number>;
    resultOutputFile?: pulumi.Input<string>;
    startTime: pulumi.Input<number>;
    type?: pulumi.Input<string>;
    versionNum?: pulumi.Input<string>;
}
