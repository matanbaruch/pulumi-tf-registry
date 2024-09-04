// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class StreamAnalyticsOutputBlob extends pulumi.CustomResource {
    /**
     * Get an existing StreamAnalyticsOutputBlob resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StreamAnalyticsOutputBlobState, opts?: pulumi.CustomResourceOptions): StreamAnalyticsOutputBlob {
        return new StreamAnalyticsOutputBlob(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azurerm:index/streamAnalyticsOutputBlob:StreamAnalyticsOutputBlob';

    /**
     * Returns true if the given object is an instance of StreamAnalyticsOutputBlob.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StreamAnalyticsOutputBlob {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StreamAnalyticsOutputBlob.__pulumiType;
    }

    public readonly authenticationMode!: pulumi.Output<string | undefined>;
    public readonly batchMaxWaitTime!: pulumi.Output<string | undefined>;
    public readonly batchMinRows!: pulumi.Output<number | undefined>;
    public readonly blobWriteMode!: pulumi.Output<string | undefined>;
    public readonly dateFormat!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly pathPattern!: pulumi.Output<string>;
    public readonly resourceGroupName!: pulumi.Output<string>;
    public readonly serialization!: pulumi.Output<outputs.StreamAnalyticsOutputBlobSerialization>;
    public readonly storageAccountKey!: pulumi.Output<string | undefined>;
    public readonly storageAccountName!: pulumi.Output<string>;
    public readonly storageContainerName!: pulumi.Output<string>;
    public readonly streamAnalyticsJobName!: pulumi.Output<string>;
    public readonly timeFormat!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.StreamAnalyticsOutputBlobTimeouts | undefined>;

    /**
     * Create a StreamAnalyticsOutputBlob resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StreamAnalyticsOutputBlobArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StreamAnalyticsOutputBlobArgs | StreamAnalyticsOutputBlobState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StreamAnalyticsOutputBlobState | undefined;
            resourceInputs["authenticationMode"] = state ? state.authenticationMode : undefined;
            resourceInputs["batchMaxWaitTime"] = state ? state.batchMaxWaitTime : undefined;
            resourceInputs["batchMinRows"] = state ? state.batchMinRows : undefined;
            resourceInputs["blobWriteMode"] = state ? state.blobWriteMode : undefined;
            resourceInputs["dateFormat"] = state ? state.dateFormat : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["pathPattern"] = state ? state.pathPattern : undefined;
            resourceInputs["resourceGroupName"] = state ? state.resourceGroupName : undefined;
            resourceInputs["serialization"] = state ? state.serialization : undefined;
            resourceInputs["storageAccountKey"] = state ? state.storageAccountKey : undefined;
            resourceInputs["storageAccountName"] = state ? state.storageAccountName : undefined;
            resourceInputs["storageContainerName"] = state ? state.storageContainerName : undefined;
            resourceInputs["streamAnalyticsJobName"] = state ? state.streamAnalyticsJobName : undefined;
            resourceInputs["timeFormat"] = state ? state.timeFormat : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as StreamAnalyticsOutputBlobArgs | undefined;
            if ((!args || args.dateFormat === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dateFormat'");
            }
            if ((!args || args.pathPattern === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pathPattern'");
            }
            if ((!args || args.resourceGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceGroupName'");
            }
            if ((!args || args.serialization === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serialization'");
            }
            if ((!args || args.storageAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageAccountName'");
            }
            if ((!args || args.storageContainerName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageContainerName'");
            }
            if ((!args || args.streamAnalyticsJobName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'streamAnalyticsJobName'");
            }
            if ((!args || args.timeFormat === undefined) && !opts.urn) {
                throw new Error("Missing required property 'timeFormat'");
            }
            resourceInputs["authenticationMode"] = args ? args.authenticationMode : undefined;
            resourceInputs["batchMaxWaitTime"] = args ? args.batchMaxWaitTime : undefined;
            resourceInputs["batchMinRows"] = args ? args.batchMinRows : undefined;
            resourceInputs["blobWriteMode"] = args ? args.blobWriteMode : undefined;
            resourceInputs["dateFormat"] = args ? args.dateFormat : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["pathPattern"] = args ? args.pathPattern : undefined;
            resourceInputs["resourceGroupName"] = args ? args.resourceGroupName : undefined;
            resourceInputs["serialization"] = args ? args.serialization : undefined;
            resourceInputs["storageAccountKey"] = args?.storageAccountKey ? pulumi.secret(args.storageAccountKey) : undefined;
            resourceInputs["storageAccountName"] = args ? args.storageAccountName : undefined;
            resourceInputs["storageContainerName"] = args ? args.storageContainerName : undefined;
            resourceInputs["streamAnalyticsJobName"] = args ? args.streamAnalyticsJobName : undefined;
            resourceInputs["timeFormat"] = args ? args.timeFormat : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["storageAccountKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(StreamAnalyticsOutputBlob.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering StreamAnalyticsOutputBlob resources.
 */
export interface StreamAnalyticsOutputBlobState {
    authenticationMode?: pulumi.Input<string>;
    batchMaxWaitTime?: pulumi.Input<string>;
    batchMinRows?: pulumi.Input<number>;
    blobWriteMode?: pulumi.Input<string>;
    dateFormat?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    pathPattern?: pulumi.Input<string>;
    resourceGroupName?: pulumi.Input<string>;
    serialization?: pulumi.Input<inputs.StreamAnalyticsOutputBlobSerialization>;
    storageAccountKey?: pulumi.Input<string>;
    storageAccountName?: pulumi.Input<string>;
    storageContainerName?: pulumi.Input<string>;
    streamAnalyticsJobName?: pulumi.Input<string>;
    timeFormat?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.StreamAnalyticsOutputBlobTimeouts>;
}

/**
 * The set of arguments for constructing a StreamAnalyticsOutputBlob resource.
 */
export interface StreamAnalyticsOutputBlobArgs {
    authenticationMode?: pulumi.Input<string>;
    batchMaxWaitTime?: pulumi.Input<string>;
    batchMinRows?: pulumi.Input<number>;
    blobWriteMode?: pulumi.Input<string>;
    dateFormat: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    pathPattern: pulumi.Input<string>;
    resourceGroupName: pulumi.Input<string>;
    serialization: pulumi.Input<inputs.StreamAnalyticsOutputBlobSerialization>;
    storageAccountKey?: pulumi.Input<string>;
    storageAccountName: pulumi.Input<string>;
    storageContainerName: pulumi.Input<string>;
    streamAnalyticsJobName: pulumi.Input<string>;
    timeFormat: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.StreamAnalyticsOutputBlobTimeouts>;
}
