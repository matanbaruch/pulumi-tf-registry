// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MediaconnectFlow extends pulumi.CustomResource {
    /**
     * Get an existing MediaconnectFlow resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MediaconnectFlowState, opts?: pulumi.CustomResourceOptions): MediaconnectFlow {
        return new MediaconnectFlow(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/mediaconnectFlow:MediaconnectFlow';

    /**
     * Returns true if the given object is an instance of MediaconnectFlow.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MediaconnectFlow {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MediaconnectFlow.__pulumiType;
    }

    /**
     * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within
     * the current AWS.
     */
    public readonly availabilityZone!: pulumi.Output<string>;
    /**
     * The IP address from which video will be sent to output destinations.
     */
    public /*out*/ readonly egressIp!: pulumi.Output<string>;
    /**
     * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
     */
    public /*out*/ readonly flowArn!: pulumi.Output<string>;
    /**
     * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within
     * the current AWS.(ReadOnly)
     */
    public /*out*/ readonly flowAvailabilityZone!: pulumi.Output<string>;
    /**
     * The maintenance settings you want to use for the flow.
     */
    public readonly maintenance!: pulumi.Output<outputs.MediaconnectFlowMaintenance>;
    /**
     * The media streams associated with the flow. You can associate any of these media streams with sources and outputs on the
     * flow.
     */
    public readonly mediaStreams!: pulumi.Output<outputs.MediaconnectFlowMediaStream[]>;
    /**
     * The name of the flow.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The source of the flow.
     */
    public readonly source!: pulumi.Output<outputs.MediaconnectFlowSource>;
    /**
     * The source failover config of the flow.
     */
    public readonly sourceFailoverConfig!: pulumi.Output<outputs.MediaconnectFlowSourceFailoverConfig>;
    /**
     * The VPC interfaces that you added to this flow.
     */
    public readonly vpcInterfaces!: pulumi.Output<outputs.MediaconnectFlowVpcInterface[]>;

    /**
     * Create a MediaconnectFlow resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MediaconnectFlowArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MediaconnectFlowArgs | MediaconnectFlowState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MediaconnectFlowState | undefined;
            resourceInputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            resourceInputs["egressIp"] = state ? state.egressIp : undefined;
            resourceInputs["flowArn"] = state ? state.flowArn : undefined;
            resourceInputs["flowAvailabilityZone"] = state ? state.flowAvailabilityZone : undefined;
            resourceInputs["maintenance"] = state ? state.maintenance : undefined;
            resourceInputs["mediaStreams"] = state ? state.mediaStreams : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["sourceFailoverConfig"] = state ? state.sourceFailoverConfig : undefined;
            resourceInputs["vpcInterfaces"] = state ? state.vpcInterfaces : undefined;
        } else {
            const args = argsOrState as MediaconnectFlowArgs | undefined;
            if ((!args || args.source === undefined) && !opts.urn) {
                throw new Error("Missing required property 'source'");
            }
            resourceInputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            resourceInputs["maintenance"] = args ? args.maintenance : undefined;
            resourceInputs["mediaStreams"] = args ? args.mediaStreams : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["sourceFailoverConfig"] = args ? args.sourceFailoverConfig : undefined;
            resourceInputs["vpcInterfaces"] = args ? args.vpcInterfaces : undefined;
            resourceInputs["egressIp"] = undefined /*out*/;
            resourceInputs["flowArn"] = undefined /*out*/;
            resourceInputs["flowAvailabilityZone"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MediaconnectFlow.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MediaconnectFlow resources.
 */
export interface MediaconnectFlowState {
    /**
     * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within
     * the current AWS.
     */
    availabilityZone?: pulumi.Input<string>;
    /**
     * The IP address from which video will be sent to output destinations.
     */
    egressIp?: pulumi.Input<string>;
    /**
     * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
     */
    flowArn?: pulumi.Input<string>;
    /**
     * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within
     * the current AWS.(ReadOnly)
     */
    flowAvailabilityZone?: pulumi.Input<string>;
    /**
     * The maintenance settings you want to use for the flow.
     */
    maintenance?: pulumi.Input<inputs.MediaconnectFlowMaintenance>;
    /**
     * The media streams associated with the flow. You can associate any of these media streams with sources and outputs on the
     * flow.
     */
    mediaStreams?: pulumi.Input<pulumi.Input<inputs.MediaconnectFlowMediaStream>[]>;
    /**
     * The name of the flow.
     */
    name?: pulumi.Input<string>;
    /**
     * The source of the flow.
     */
    source?: pulumi.Input<inputs.MediaconnectFlowSource>;
    /**
     * The source failover config of the flow.
     */
    sourceFailoverConfig?: pulumi.Input<inputs.MediaconnectFlowSourceFailoverConfig>;
    /**
     * The VPC interfaces that you added to this flow.
     */
    vpcInterfaces?: pulumi.Input<pulumi.Input<inputs.MediaconnectFlowVpcInterface>[]>;
}

/**
 * The set of arguments for constructing a MediaconnectFlow resource.
 */
export interface MediaconnectFlowArgs {
    /**
     * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within
     * the current AWS.
     */
    availabilityZone?: pulumi.Input<string>;
    /**
     * The maintenance settings you want to use for the flow.
     */
    maintenance?: pulumi.Input<inputs.MediaconnectFlowMaintenance>;
    /**
     * The media streams associated with the flow. You can associate any of these media streams with sources and outputs on the
     * flow.
     */
    mediaStreams?: pulumi.Input<pulumi.Input<inputs.MediaconnectFlowMediaStream>[]>;
    /**
     * The name of the flow.
     */
    name?: pulumi.Input<string>;
    /**
     * The source of the flow.
     */
    source: pulumi.Input<inputs.MediaconnectFlowSource>;
    /**
     * The source failover config of the flow.
     */
    sourceFailoverConfig?: pulumi.Input<inputs.MediaconnectFlowSourceFailoverConfig>;
    /**
     * The VPC interfaces that you added to this flow.
     */
    vpcInterfaces?: pulumi.Input<pulumi.Input<inputs.MediaconnectFlowVpcInterface>[]>;
}
