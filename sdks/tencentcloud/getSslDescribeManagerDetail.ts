// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getSslDescribeManagerDetail(args: GetSslDescribeManagerDetailArgs, opts?: pulumi.InvokeOptions): Promise<GetSslDescribeManagerDetailResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("tencentcloud:index/getSslDescribeManagerDetail:getSslDescribeManagerDetail", {
        "id": args.id,
        "managerId": args.managerId,
        "resultOutputFile": args.resultOutputFile,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getSslDescribeManagerDetail.
 */
export interface GetSslDescribeManagerDetailArgs {
    id?: string;
    managerId: number;
    resultOutputFile?: string;
}

/**
 * A collection of values returned by getSslDescribeManagerDetail.
 */
export interface GetSslDescribeManagerDetailResult {
    readonly companyId: number;
    readonly companyInfos: outputs.GetSslDescribeManagerDetailCompanyInfo[];
    readonly contactFirstName: string;
    readonly contactLastName: string;
    readonly contactMail: string;
    readonly contactPhone: string;
    readonly contactPosition: string;
    readonly createTime: string;
    readonly expireTime: string;
    readonly id: string;
    readonly managerDepartment: string;
    readonly managerFirstName: string;
    readonly managerId: number;
    readonly managerLastName: string;
    readonly managerMail: string;
    readonly managerPhone: string;
    readonly managerPosition: string;
    readonly resultOutputFile?: string;
    readonly status: string;
    readonly verifyTime: string;
}
export function getSslDescribeManagerDetailOutput(args: GetSslDescribeManagerDetailOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetSslDescribeManagerDetailResult> {
    return pulumi.output(args).apply((a: any) => getSslDescribeManagerDetail(a, opts))
}

/**
 * A collection of arguments for invoking getSslDescribeManagerDetail.
 */
export interface GetSslDescribeManagerDetailOutputArgs {
    id?: pulumi.Input<string>;
    managerId: pulumi.Input<number>;
    resultOutputFile?: pulumi.Input<string>;
}
