// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export function getKinesisfirehoseDeliveryStream(args: GetKinesisfirehoseDeliveryStreamArgs, opts?: pulumi.InvokeOptions): Promise<GetKinesisfirehoseDeliveryStreamResult> {

    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("awscc:index/getKinesisfirehoseDeliveryStream:getKinesisfirehoseDeliveryStream", {
        "id": args.id,
    }, opts, utilities.getPackage());
}

/**
 * A collection of arguments for invoking getKinesisfirehoseDeliveryStream.
 */
export interface GetKinesisfirehoseDeliveryStreamArgs {
    id: string;
}

/**
 * A collection of values returned by getKinesisfirehoseDeliveryStream.
 */
export interface GetKinesisfirehoseDeliveryStreamResult {
    readonly amazonOpenSearchServerlessDestinationConfiguration: outputs.GetKinesisfirehoseDeliveryStreamAmazonOpenSearchServerlessDestinationConfiguration;
    readonly amazonopensearchserviceDestinationConfiguration: outputs.GetKinesisfirehoseDeliveryStreamAmazonopensearchserviceDestinationConfiguration;
    readonly arn: string;
    readonly deliveryStreamEncryptionConfigurationInput: outputs.GetKinesisfirehoseDeliveryStreamDeliveryStreamEncryptionConfigurationInput;
    readonly deliveryStreamName: string;
    readonly deliveryStreamType: string;
    readonly elasticsearchDestinationConfiguration: outputs.GetKinesisfirehoseDeliveryStreamElasticsearchDestinationConfiguration;
    readonly extendedS3DestinationConfiguration: outputs.GetKinesisfirehoseDeliveryStreamExtendedS3DestinationConfiguration;
    readonly httpEndpointDestinationConfiguration: outputs.GetKinesisfirehoseDeliveryStreamHttpEndpointDestinationConfiguration;
    readonly icebergDestinationConfiguration: outputs.GetKinesisfirehoseDeliveryStreamIcebergDestinationConfiguration;
    readonly id: string;
    readonly kinesisStreamSourceConfiguration: outputs.GetKinesisfirehoseDeliveryStreamKinesisStreamSourceConfiguration;
    readonly mskSourceConfiguration: outputs.GetKinesisfirehoseDeliveryStreamMskSourceConfiguration;
    readonly redshiftDestinationConfiguration: outputs.GetKinesisfirehoseDeliveryStreamRedshiftDestinationConfiguration;
    readonly s3DestinationConfiguration: outputs.GetKinesisfirehoseDeliveryStreamS3DestinationConfiguration;
    readonly snowflakeDestinationConfiguration: outputs.GetKinesisfirehoseDeliveryStreamSnowflakeDestinationConfiguration;
    readonly splunkDestinationConfiguration: outputs.GetKinesisfirehoseDeliveryStreamSplunkDestinationConfiguration;
    readonly tags: outputs.GetKinesisfirehoseDeliveryStreamTag[];
}
export function getKinesisfirehoseDeliveryStreamOutput(args: GetKinesisfirehoseDeliveryStreamOutputArgs, opts?: pulumi.InvokeOptions): pulumi.Output<GetKinesisfirehoseDeliveryStreamResult> {
    return pulumi.output(args).apply((a: any) => getKinesisfirehoseDeliveryStream(a, opts))
}

/**
 * A collection of arguments for invoking getKinesisfirehoseDeliveryStream.
 */
export interface GetKinesisfirehoseDeliveryStreamOutputArgs {
    id: pulumi.Input<string>;
}
