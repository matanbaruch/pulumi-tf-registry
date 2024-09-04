// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkmanagerSiteToSiteVpnAttachment extends pulumi.CustomResource {
    /**
     * Get an existing NetworkmanagerSiteToSiteVpnAttachment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkmanagerSiteToSiteVpnAttachmentState, opts?: pulumi.CustomResourceOptions): NetworkmanagerSiteToSiteVpnAttachment {
        return new NetworkmanagerSiteToSiteVpnAttachment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/networkmanagerSiteToSiteVpnAttachment:NetworkmanagerSiteToSiteVpnAttachment';

    /**
     * Returns true if the given object is an instance of NetworkmanagerSiteToSiteVpnAttachment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkmanagerSiteToSiteVpnAttachment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkmanagerSiteToSiteVpnAttachment.__pulumiType;
    }

    /**
     * The ID of the attachment.
     */
    public /*out*/ readonly attachmentId!: pulumi.Output<string>;
    /**
     * The policy rule number associated with the attachment.
     */
    public /*out*/ readonly attachmentPolicyRuleNumber!: pulumi.Output<number>;
    /**
     * The type of attachment.
     */
    public /*out*/ readonly attachmentType!: pulumi.Output<string>;
    /**
     * The ARN of a core network for the VPC attachment.
     */
    public /*out*/ readonly coreNetworkArn!: pulumi.Output<string>;
    /**
     * The ID of a core network where you're creating a site-to-site VPN attachment.
     */
    public readonly coreNetworkId!: pulumi.Output<string>;
    /**
     * Creation time of the attachment.
     */
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    /**
     * The Region where the edge is located.
     */
    public /*out*/ readonly edgeLocation!: pulumi.Output<string>;
    /**
     * The name of the network function group attachment.
     */
    public readonly networkFunctionGroupName!: pulumi.Output<string>;
    /**
     * Owner account of the attachment.
     */
    public /*out*/ readonly ownerAccountId!: pulumi.Output<string>;
    /**
     * The attachment to move from one network function group to another.
     */
    public readonly proposedNetworkFunctionGroupChange!: pulumi.Output<outputs.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange>;
    /**
     * The attachment to move from one segment to another.
     */
    public readonly proposedSegmentChange!: pulumi.Output<outputs.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange>;
    /**
     * The ARN of the Resource.
     */
    public /*out*/ readonly resourceArn!: pulumi.Output<string>;
    /**
     * The name of the segment that attachment is in.
     */
    public /*out*/ readonly segmentName!: pulumi.Output<string>;
    /**
     * The state of the attachment.
     */
    public /*out*/ readonly state!: pulumi.Output<string>;
    /**
     * Tags for the attachment.
     */
    public readonly tags!: pulumi.Output<outputs.NetworkmanagerSiteToSiteVpnAttachmentTag[]>;
    /**
     * Last update time of the attachment.
     */
    public /*out*/ readonly updatedAt!: pulumi.Output<string>;
    /**
     * The ARN of the site-to-site VPN attachment.
     */
    public readonly vpnConnectionArn!: pulumi.Output<string>;

    /**
     * Create a NetworkmanagerSiteToSiteVpnAttachment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkmanagerSiteToSiteVpnAttachmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkmanagerSiteToSiteVpnAttachmentArgs | NetworkmanagerSiteToSiteVpnAttachmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkmanagerSiteToSiteVpnAttachmentState | undefined;
            resourceInputs["attachmentId"] = state ? state.attachmentId : undefined;
            resourceInputs["attachmentPolicyRuleNumber"] = state ? state.attachmentPolicyRuleNumber : undefined;
            resourceInputs["attachmentType"] = state ? state.attachmentType : undefined;
            resourceInputs["coreNetworkArn"] = state ? state.coreNetworkArn : undefined;
            resourceInputs["coreNetworkId"] = state ? state.coreNetworkId : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["edgeLocation"] = state ? state.edgeLocation : undefined;
            resourceInputs["networkFunctionGroupName"] = state ? state.networkFunctionGroupName : undefined;
            resourceInputs["ownerAccountId"] = state ? state.ownerAccountId : undefined;
            resourceInputs["proposedNetworkFunctionGroupChange"] = state ? state.proposedNetworkFunctionGroupChange : undefined;
            resourceInputs["proposedSegmentChange"] = state ? state.proposedSegmentChange : undefined;
            resourceInputs["resourceArn"] = state ? state.resourceArn : undefined;
            resourceInputs["segmentName"] = state ? state.segmentName : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["updatedAt"] = state ? state.updatedAt : undefined;
            resourceInputs["vpnConnectionArn"] = state ? state.vpnConnectionArn : undefined;
        } else {
            const args = argsOrState as NetworkmanagerSiteToSiteVpnAttachmentArgs | undefined;
            if ((!args || args.coreNetworkId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'coreNetworkId'");
            }
            if ((!args || args.vpnConnectionArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpnConnectionArn'");
            }
            resourceInputs["coreNetworkId"] = args ? args.coreNetworkId : undefined;
            resourceInputs["networkFunctionGroupName"] = args ? args.networkFunctionGroupName : undefined;
            resourceInputs["proposedNetworkFunctionGroupChange"] = args ? args.proposedNetworkFunctionGroupChange : undefined;
            resourceInputs["proposedSegmentChange"] = args ? args.proposedSegmentChange : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["vpnConnectionArn"] = args ? args.vpnConnectionArn : undefined;
            resourceInputs["attachmentId"] = undefined /*out*/;
            resourceInputs["attachmentPolicyRuleNumber"] = undefined /*out*/;
            resourceInputs["attachmentType"] = undefined /*out*/;
            resourceInputs["coreNetworkArn"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["edgeLocation"] = undefined /*out*/;
            resourceInputs["ownerAccountId"] = undefined /*out*/;
            resourceInputs["resourceArn"] = undefined /*out*/;
            resourceInputs["segmentName"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["updatedAt"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkmanagerSiteToSiteVpnAttachment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkmanagerSiteToSiteVpnAttachment resources.
 */
export interface NetworkmanagerSiteToSiteVpnAttachmentState {
    /**
     * The ID of the attachment.
     */
    attachmentId?: pulumi.Input<string>;
    /**
     * The policy rule number associated with the attachment.
     */
    attachmentPolicyRuleNumber?: pulumi.Input<number>;
    /**
     * The type of attachment.
     */
    attachmentType?: pulumi.Input<string>;
    /**
     * The ARN of a core network for the VPC attachment.
     */
    coreNetworkArn?: pulumi.Input<string>;
    /**
     * The ID of a core network where you're creating a site-to-site VPN attachment.
     */
    coreNetworkId?: pulumi.Input<string>;
    /**
     * Creation time of the attachment.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The Region where the edge is located.
     */
    edgeLocation?: pulumi.Input<string>;
    /**
     * The name of the network function group attachment.
     */
    networkFunctionGroupName?: pulumi.Input<string>;
    /**
     * Owner account of the attachment.
     */
    ownerAccountId?: pulumi.Input<string>;
    /**
     * The attachment to move from one network function group to another.
     */
    proposedNetworkFunctionGroupChange?: pulumi.Input<inputs.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange>;
    /**
     * The attachment to move from one segment to another.
     */
    proposedSegmentChange?: pulumi.Input<inputs.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange>;
    /**
     * The ARN of the Resource.
     */
    resourceArn?: pulumi.Input<string>;
    /**
     * The name of the segment that attachment is in.
     */
    segmentName?: pulumi.Input<string>;
    /**
     * The state of the attachment.
     */
    state?: pulumi.Input<string>;
    /**
     * Tags for the attachment.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.NetworkmanagerSiteToSiteVpnAttachmentTag>[]>;
    /**
     * Last update time of the attachment.
     */
    updatedAt?: pulumi.Input<string>;
    /**
     * The ARN of the site-to-site VPN attachment.
     */
    vpnConnectionArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NetworkmanagerSiteToSiteVpnAttachment resource.
 */
export interface NetworkmanagerSiteToSiteVpnAttachmentArgs {
    /**
     * The ID of a core network where you're creating a site-to-site VPN attachment.
     */
    coreNetworkId: pulumi.Input<string>;
    /**
     * The name of the network function group attachment.
     */
    networkFunctionGroupName?: pulumi.Input<string>;
    /**
     * The attachment to move from one network function group to another.
     */
    proposedNetworkFunctionGroupChange?: pulumi.Input<inputs.NetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange>;
    /**
     * The attachment to move from one segment to another.
     */
    proposedSegmentChange?: pulumi.Input<inputs.NetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange>;
    /**
     * Tags for the attachment.
     */
    tags?: pulumi.Input<pulumi.Input<inputs.NetworkmanagerSiteToSiteVpnAttachmentTag>[]>;
    /**
     * The ARN of the site-to-site VPN attachment.
     */
    vpnConnectionArn: pulumi.Input<string>;
}
