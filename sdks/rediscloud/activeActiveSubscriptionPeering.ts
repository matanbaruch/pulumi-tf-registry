// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ActiveActiveSubscriptionPeering extends pulumi.CustomResource {
    /**
     * Get an existing ActiveActiveSubscriptionPeering resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ActiveActiveSubscriptionPeeringState, opts?: pulumi.CustomResourceOptions): ActiveActiveSubscriptionPeering {
        return new ActiveActiveSubscriptionPeering(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rediscloud:index/activeActiveSubscriptionPeering:ActiveActiveSubscriptionPeering';

    /**
     * Returns true if the given object is an instance of ActiveActiveSubscriptionPeering.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ActiveActiveSubscriptionPeering {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ActiveActiveSubscriptionPeering.__pulumiType;
    }

    /**
     * AWS account id that the VPC to be peered lives in
     */
    public readonly awsAccountId!: pulumi.Output<string>;
    /**
     * Identifier of the AWS cloud peering
     */
    public /*out*/ readonly awsPeeringId!: pulumi.Output<string>;
    /**
     * AWS Region that the VPC to be peered lives in
     */
    public readonly destinationRegion!: pulumi.Output<string>;
    /**
     * The name of the network to be peered
     */
    public readonly gcpNetworkName!: pulumi.Output<string>;
    /**
     * Identifier of the cloud peering
     */
    public /*out*/ readonly gcpPeeringId!: pulumi.Output<string>;
    /**
     * GCP project ID that the VPC to be peered lives in
     */
    public readonly gcpProjectId!: pulumi.Output<string>;
    /**
     * The name of the Redis Enterprise Cloud network to be peered
     */
    public /*out*/ readonly gcpRedisNetworkName!: pulumi.Output<string>;
    /**
     * Identifier of the Redis Enterprise Cloud GCP project to be peered
     */
    public /*out*/ readonly gcpRedisProjectId!: pulumi.Output<string>;
    /**
     * The cloud provider to use with the vpc peering, (either `AWS` or `GCP`)
     */
    public readonly providerName!: pulumi.Output<string | undefined>;
    /**
     * AWS or GCP Region that the VPC to be peered lives in
     */
    public readonly sourceRegion!: pulumi.Output<string>;
    /**
     * Current status of the account - `initiating-request`, `pending-acceptance`, `active`, `inactive` or `failed`
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    /**
     * A valid subscription predefined in the current account
     */
    public readonly subscriptionId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ActiveActiveSubscriptionPeeringTimeouts | undefined>;
    /**
     * CIDR range of the VPC to be peered
     */
    public readonly vpcCidr!: pulumi.Output<string>;
    /**
     * CIDR ranges of the VPC to be peered
     */
    public readonly vpcCidrs!: pulumi.Output<string[]>;
    /**
     * Identifier of the VPC to be peered
     */
    public readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a ActiveActiveSubscriptionPeering resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ActiveActiveSubscriptionPeeringArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ActiveActiveSubscriptionPeeringArgs | ActiveActiveSubscriptionPeeringState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ActiveActiveSubscriptionPeeringState | undefined;
            resourceInputs["awsAccountId"] = state ? state.awsAccountId : undefined;
            resourceInputs["awsPeeringId"] = state ? state.awsPeeringId : undefined;
            resourceInputs["destinationRegion"] = state ? state.destinationRegion : undefined;
            resourceInputs["gcpNetworkName"] = state ? state.gcpNetworkName : undefined;
            resourceInputs["gcpPeeringId"] = state ? state.gcpPeeringId : undefined;
            resourceInputs["gcpProjectId"] = state ? state.gcpProjectId : undefined;
            resourceInputs["gcpRedisNetworkName"] = state ? state.gcpRedisNetworkName : undefined;
            resourceInputs["gcpRedisProjectId"] = state ? state.gcpRedisProjectId : undefined;
            resourceInputs["providerName"] = state ? state.providerName : undefined;
            resourceInputs["sourceRegion"] = state ? state.sourceRegion : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["subscriptionId"] = state ? state.subscriptionId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["vpcCidr"] = state ? state.vpcCidr : undefined;
            resourceInputs["vpcCidrs"] = state ? state.vpcCidrs : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as ActiveActiveSubscriptionPeeringArgs | undefined;
            if ((!args || args.subscriptionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subscriptionId'");
            }
            resourceInputs["awsAccountId"] = args ? args.awsAccountId : undefined;
            resourceInputs["destinationRegion"] = args ? args.destinationRegion : undefined;
            resourceInputs["gcpNetworkName"] = args ? args.gcpNetworkName : undefined;
            resourceInputs["gcpProjectId"] = args ? args.gcpProjectId : undefined;
            resourceInputs["providerName"] = args ? args.providerName : undefined;
            resourceInputs["sourceRegion"] = args ? args.sourceRegion : undefined;
            resourceInputs["subscriptionId"] = args ? args.subscriptionId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["vpcCidr"] = args ? args.vpcCidr : undefined;
            resourceInputs["vpcCidrs"] = args ? args.vpcCidrs : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["awsPeeringId"] = undefined /*out*/;
            resourceInputs["gcpPeeringId"] = undefined /*out*/;
            resourceInputs["gcpRedisNetworkName"] = undefined /*out*/;
            resourceInputs["gcpRedisProjectId"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ActiveActiveSubscriptionPeering.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ActiveActiveSubscriptionPeering resources.
 */
export interface ActiveActiveSubscriptionPeeringState {
    /**
     * AWS account id that the VPC to be peered lives in
     */
    awsAccountId?: pulumi.Input<string>;
    /**
     * Identifier of the AWS cloud peering
     */
    awsPeeringId?: pulumi.Input<string>;
    /**
     * AWS Region that the VPC to be peered lives in
     */
    destinationRegion?: pulumi.Input<string>;
    /**
     * The name of the network to be peered
     */
    gcpNetworkName?: pulumi.Input<string>;
    /**
     * Identifier of the cloud peering
     */
    gcpPeeringId?: pulumi.Input<string>;
    /**
     * GCP project ID that the VPC to be peered lives in
     */
    gcpProjectId?: pulumi.Input<string>;
    /**
     * The name of the Redis Enterprise Cloud network to be peered
     */
    gcpRedisNetworkName?: pulumi.Input<string>;
    /**
     * Identifier of the Redis Enterprise Cloud GCP project to be peered
     */
    gcpRedisProjectId?: pulumi.Input<string>;
    /**
     * The cloud provider to use with the vpc peering, (either `AWS` or `GCP`)
     */
    providerName?: pulumi.Input<string>;
    /**
     * AWS or GCP Region that the VPC to be peered lives in
     */
    sourceRegion?: pulumi.Input<string>;
    /**
     * Current status of the account - `initiating-request`, `pending-acceptance`, `active`, `inactive` or `failed`
     */
    status?: pulumi.Input<string>;
    /**
     * A valid subscription predefined in the current account
     */
    subscriptionId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ActiveActiveSubscriptionPeeringTimeouts>;
    /**
     * CIDR range of the VPC to be peered
     */
    vpcCidr?: pulumi.Input<string>;
    /**
     * CIDR ranges of the VPC to be peered
     */
    vpcCidrs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Identifier of the VPC to be peered
     */
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ActiveActiveSubscriptionPeering resource.
 */
export interface ActiveActiveSubscriptionPeeringArgs {
    /**
     * AWS account id that the VPC to be peered lives in
     */
    awsAccountId?: pulumi.Input<string>;
    /**
     * AWS Region that the VPC to be peered lives in
     */
    destinationRegion?: pulumi.Input<string>;
    /**
     * The name of the network to be peered
     */
    gcpNetworkName?: pulumi.Input<string>;
    /**
     * GCP project ID that the VPC to be peered lives in
     */
    gcpProjectId?: pulumi.Input<string>;
    /**
     * The cloud provider to use with the vpc peering, (either `AWS` or `GCP`)
     */
    providerName?: pulumi.Input<string>;
    /**
     * AWS or GCP Region that the VPC to be peered lives in
     */
    sourceRegion?: pulumi.Input<string>;
    /**
     * A valid subscription predefined in the current account
     */
    subscriptionId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ActiveActiveSubscriptionPeeringTimeouts>;
    /**
     * CIDR range of the VPC to be peered
     */
    vpcCidr?: pulumi.Input<string>;
    /**
     * CIDR ranges of the VPC to be peered
     */
    vpcCidrs?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Identifier of the VPC to be peered
     */
    vpcId?: pulumi.Input<string>;
}
