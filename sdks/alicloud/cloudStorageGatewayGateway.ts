// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CloudStorageGatewayGateway extends pulumi.CustomResource {
    /**
     * Get an existing CloudStorageGatewayGateway resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudStorageGatewayGatewayState, opts?: pulumi.CustomResourceOptions): CloudStorageGatewayGateway {
        return new CloudStorageGatewayGateway(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/cloudStorageGatewayGateway:CloudStorageGatewayGateway';

    /**
     * Returns true if the given object is an instance of CloudStorageGatewayGateway.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudStorageGatewayGateway {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudStorageGatewayGateway.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly gatewayClass!: pulumi.Output<string | undefined>;
    public readonly gatewayName!: pulumi.Output<string>;
    public readonly location!: pulumi.Output<string>;
    public readonly paymentType!: pulumi.Output<string | undefined>;
    public readonly publicNetworkBandwidth!: pulumi.Output<number>;
    public readonly reasonDetail!: pulumi.Output<string | undefined>;
    public readonly reasonType!: pulumi.Output<string | undefined>;
    public readonly releaseAfterExpiration!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly storageBundleId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.CloudStorageGatewayGatewayTimeouts | undefined>;
    public readonly type!: pulumi.Output<string>;
    public readonly vswitchId!: pulumi.Output<string | undefined>;

    /**
     * Create a CloudStorageGatewayGateway resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudStorageGatewayGatewayArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudStorageGatewayGatewayArgs | CloudStorageGatewayGatewayState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudStorageGatewayGatewayState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["gatewayClass"] = state ? state.gatewayClass : undefined;
            resourceInputs["gatewayName"] = state ? state.gatewayName : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["paymentType"] = state ? state.paymentType : undefined;
            resourceInputs["publicNetworkBandwidth"] = state ? state.publicNetworkBandwidth : undefined;
            resourceInputs["reasonDetail"] = state ? state.reasonDetail : undefined;
            resourceInputs["reasonType"] = state ? state.reasonType : undefined;
            resourceInputs["releaseAfterExpiration"] = state ? state.releaseAfterExpiration : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["storageBundleId"] = state ? state.storageBundleId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["vswitchId"] = state ? state.vswitchId : undefined;
        } else {
            const args = argsOrState as CloudStorageGatewayGatewayArgs | undefined;
            if ((!args || args.gatewayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gatewayName'");
            }
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            if ((!args || args.storageBundleId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'storageBundleId'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["gatewayClass"] = args ? args.gatewayClass : undefined;
            resourceInputs["gatewayName"] = args ? args.gatewayName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["paymentType"] = args ? args.paymentType : undefined;
            resourceInputs["publicNetworkBandwidth"] = args ? args.publicNetworkBandwidth : undefined;
            resourceInputs["reasonDetail"] = args ? args.reasonDetail : undefined;
            resourceInputs["reasonType"] = args ? args.reasonType : undefined;
            resourceInputs["releaseAfterExpiration"] = args ? args.releaseAfterExpiration : undefined;
            resourceInputs["storageBundleId"] = args ? args.storageBundleId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["vswitchId"] = args ? args.vswitchId : undefined;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudStorageGatewayGateway.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudStorageGatewayGateway resources.
 */
export interface CloudStorageGatewayGatewayState {
    description?: pulumi.Input<string>;
    gatewayClass?: pulumi.Input<string>;
    gatewayName?: pulumi.Input<string>;
    location?: pulumi.Input<string>;
    paymentType?: pulumi.Input<string>;
    publicNetworkBandwidth?: pulumi.Input<number>;
    reasonDetail?: pulumi.Input<string>;
    reasonType?: pulumi.Input<string>;
    releaseAfterExpiration?: pulumi.Input<boolean>;
    status?: pulumi.Input<string>;
    storageBundleId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CloudStorageGatewayGatewayTimeouts>;
    type?: pulumi.Input<string>;
    vswitchId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CloudStorageGatewayGateway resource.
 */
export interface CloudStorageGatewayGatewayArgs {
    description?: pulumi.Input<string>;
    gatewayClass?: pulumi.Input<string>;
    gatewayName: pulumi.Input<string>;
    location: pulumi.Input<string>;
    paymentType?: pulumi.Input<string>;
    publicNetworkBandwidth?: pulumi.Input<number>;
    reasonDetail?: pulumi.Input<string>;
    reasonType?: pulumi.Input<string>;
    releaseAfterExpiration?: pulumi.Input<boolean>;
    storageBundleId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.CloudStorageGatewayGatewayTimeouts>;
    type: pulumi.Input<string>;
    vswitchId?: pulumi.Input<string>;
}
