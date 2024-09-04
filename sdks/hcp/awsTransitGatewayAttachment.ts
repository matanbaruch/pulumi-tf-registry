// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AwsTransitGatewayAttachment extends pulumi.CustomResource {
    /**
     * Get an existing AwsTransitGatewayAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AwsTransitGatewayAttachmentState, opts?: pulumi.CustomResourceOptions): AwsTransitGatewayAttachment {
        return new AwsTransitGatewayAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'hcp:index/awsTransitGatewayAttachment:AwsTransitGatewayAttachment';

    /**
     * Returns true if the given object is an instance of AwsTransitGatewayAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AwsTransitGatewayAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AwsTransitGatewayAttachment.__pulumiType;
    }

    /**
     * The time that the transit gateway attachment was created.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The time after which the transit gateway attachment will be considered expired if it hasn't transitioned into `ACCEPTED`
     * or `ACTIVE` state.
     */
    public /*out*/ readonly expiresAt!: pulumi.Output<string>;
    /**
     * The ID of the HashiCorp Virtual Network (HVN).
     */
    public readonly hvnId!: pulumi.Output<string>;
    /**
     * The ID of the HCP organization where the transit gateway attachment is located. Always matches the HVN's organization.
     */
    public /*out*/ readonly organizationId!: pulumi.Output<string>;
    /**
     * The ID of the HCP project where the transit gateway attachment is located." If not specified, the project specified in
     * the HCP Provider config block will be used, if configured. If a project is not configured in the HCP Provider config
     * block, the oldest project in the organization will be used.
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * The transit gateway attachment ID used by AWS.
     */
    public /*out*/ readonly providerTransitGatewayAttachmentId!: pulumi.Output<string>;
    public readonly resourceShareArn!: pulumi.Output<string>;
    /**
     * A unique URL identifying the transit gateway attachment.
     */
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    /**
     * The state of the transit gateway attachment.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.AwsTransitGatewayAttachmentTimeouts | undefined>;
    /**
     * The user-settable name of the transit gateway attachment in HCP.
     */
    public readonly transitGatewayAttachmentId!: pulumi.Output<string>;
    /**
     * The ID of the user-owned transit gateway in AWS. The AWS region of the transit gateway must match the HVN.
     */
    public readonly transitGatewayId!: pulumi.Output<string>;

    /**
     * Create a AwsTransitGatewayAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AwsTransitGatewayAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AwsTransitGatewayAttachmentArgs | AwsTransitGatewayAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AwsTransitGatewayAttachmentState | undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["expiresAt"] = state ? state.expiresAt : undefined;
            resourceInputs["hvnId"] = state ? state.hvnId : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["providerTransitGatewayAttachmentId"] = state ? state.providerTransitGatewayAttachmentId : undefined;
            resourceInputs["resourceShareArn"] = state ? state.resourceShareArn : undefined;
            resourceInputs["selfLink"] = state ? state.selfLink : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["transitGatewayAttachmentId"] = state ? state.transitGatewayAttachmentId : undefined;
            resourceInputs["transitGatewayId"] = state ? state.transitGatewayId : undefined;
        } else {
            const args = argsOrState as AwsTransitGatewayAttachmentArgs | undefined;
            if ((!args || args.hvnId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hvnId'");
            }
            if ((!args || args.resourceShareArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceShareArn'");
            }
            if ((!args || args.transitGatewayAttachmentId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'transitGatewayAttachmentId'");
            }
            if ((!args || args.transitGatewayId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'transitGatewayId'");
            }
            resourceInputs["hvnId"] = args ? args.hvnId : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["resourceShareArn"] = args?.resourceShareArn ? pulumi.secret(args.resourceShareArn) : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["transitGatewayAttachmentId"] = args ? args.transitGatewayAttachmentId : undefined;
            resourceInputs["transitGatewayId"] = args ? args.transitGatewayId : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["expiresAt"] = undefined /*out*/;
            resourceInputs["organizationId"] = undefined /*out*/;
            resourceInputs["providerTransitGatewayAttachmentId"] = undefined /*out*/;
            resourceInputs["selfLink"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["resourceShareArn"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(AwsTransitGatewayAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AwsTransitGatewayAttachment resources.
 */
export interface AwsTransitGatewayAttachmentState {
    /**
     * The time that the transit gateway attachment was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The time after which the transit gateway attachment will be considered expired if it hasn't transitioned into `ACCEPTED`
     * or `ACTIVE` state.
     */
    expiresAt?: pulumi.Input<string>;
    /**
     * The ID of the HashiCorp Virtual Network (HVN).
     */
    hvnId?: pulumi.Input<string>;
    /**
     * The ID of the HCP organization where the transit gateway attachment is located. Always matches the HVN's organization.
     */
    organizationId?: pulumi.Input<string>;
    /**
     * The ID of the HCP project where the transit gateway attachment is located." If not specified, the project specified in
     * the HCP Provider config block will be used, if configured. If a project is not configured in the HCP Provider config
     * block, the oldest project in the organization will be used.
     */
    projectId?: pulumi.Input<string>;
    /**
     * The transit gateway attachment ID used by AWS.
     */
    providerTransitGatewayAttachmentId?: pulumi.Input<string>;
    resourceShareArn?: pulumi.Input<string>;
    /**
     * A unique URL identifying the transit gateway attachment.
     */
    selfLink?: pulumi.Input<string>;
    /**
     * The state of the transit gateway attachment.
     */
    state?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AwsTransitGatewayAttachmentTimeouts>;
    /**
     * The user-settable name of the transit gateway attachment in HCP.
     */
    transitGatewayAttachmentId?: pulumi.Input<string>;
    /**
     * The ID of the user-owned transit gateway in AWS. The AWS region of the transit gateway must match the HVN.
     */
    transitGatewayId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AwsTransitGatewayAttachment resource.
 */
export interface AwsTransitGatewayAttachmentArgs {
    /**
     * The ID of the HashiCorp Virtual Network (HVN).
     */
    hvnId: pulumi.Input<string>;
    /**
     * The ID of the HCP project where the transit gateway attachment is located." If not specified, the project specified in
     * the HCP Provider config block will be used, if configured. If a project is not configured in the HCP Provider config
     * block, the oldest project in the organization will be used.
     */
    projectId?: pulumi.Input<string>;
    resourceShareArn: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AwsTransitGatewayAttachmentTimeouts>;
    /**
     * The user-settable name of the transit gateway attachment in HCP.
     */
    transitGatewayAttachmentId: pulumi.Input<string>;
    /**
     * The ID of the user-owned transit gateway in AWS. The AWS region of the transit gateway must match the HVN.
     */
    transitGatewayId: pulumi.Input<string>;
}
