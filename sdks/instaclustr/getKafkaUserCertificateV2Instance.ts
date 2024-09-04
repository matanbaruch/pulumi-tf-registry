// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export function getKafkaUserCertificateV2Instance(args: GetKafkaUserCertificateV2InstanceArgs, opts?: pulumi.InvokeOptions): Promise<GetKafkaUserCertificateV2InstanceResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("instaclustr:index/getKafkaUserCertificateV2Instance:getKafkaUserCertificateV2Instance", {
        "clusterId": args.clusterId,
        "csr": args.csr,
        "expiryDate": args.expiryDate,
        "id": args.id,
        "kafkaUsername": args.kafkaUsername,
        "signedCertificate": args.signedCertificate,
        "validPeriod": args.validPeriod,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKafkaUserCertificateV2Instance.
 */
export interface GetKafkaUserCertificateV2InstanceArgs {
    clusterId?: string;
    csr?: string;
    expiryDate?: string;
    id: string;
    kafkaUsername?: string;
    signedCertificate?: string;
    validPeriod?: number;
}

/**
 * A collection of values returned by getKafkaUserCertificateV2Instance.
 */
export interface GetKafkaUserCertificateV2InstanceResult {
    readonly clusterId: string;
    readonly csr: string;
    readonly expiryDate: string;
    readonly id: string;
    readonly kafkaUsername: string;
    readonly signedCertificate: string;
    readonly validPeriod: number;
}
export function getKafkaUserCertificateV2InstanceOutput(args: GetKafkaUserCertificateV2InstanceOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKafkaUserCertificateV2InstanceResult> {
    return pulumi.output(args).apply((a: any) => getKafkaUserCertificateV2Instance(a, opts))
}

/**
 * A collection of arguments for invoking getKafkaUserCertificateV2Instance.
 */
export interface GetKafkaUserCertificateV2InstanceOutputArgs {
    clusterId?: pulumi.Input<string>;
    csr?: pulumi.Input<string>;
    expiryDate?: pulumi.Input<string>;
    id: pulumi.Input<string>;
    kafkaUsername?: pulumi.Input<string>;
    signedCertificate?: pulumi.Input<string>;
    validPeriod?: pulumi.Input<number>;
}
