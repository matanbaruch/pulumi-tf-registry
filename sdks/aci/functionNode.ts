// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class FunctionNode extends pulumi.CustomResource {
    /**
     * Get an existing FunctionNode resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FunctionNodeState, opts?: pulumi.CustomResourceOptions): FunctionNode {
        return new FunctionNode(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/functionNode:FunctionNode';

    /**
     * Returns true if the given object is an instance of FunctionNode.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FunctionNode {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FunctionNode.__pulumiType;
    }

    public readonly annotation!: pulumi.Output<string>;
    public /*out*/ readonly connConsumerDn!: pulumi.Output<string>;
    public /*out*/ readonly connCopyDn!: pulumi.Output<string>;
    public /*out*/ readonly connProviderDn!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly funcTemplateType!: pulumi.Output<string>;
    public readonly funcType!: pulumi.Output<string>;
    public readonly isCopy!: pulumi.Output<string>;
    public readonly l4L7DeviceInterfaceConsumerAttachmentNotification!: pulumi.Output<string>;
    public readonly l4L7DeviceInterfaceConsumerConnectorType!: pulumi.Output<string>;
    public readonly l4L7DeviceInterfaceConsumerName!: pulumi.Output<string>;
    public readonly l4L7DeviceInterfaceProviderAttachmentNotification!: pulumi.Output<string>;
    public readonly l4L7DeviceInterfaceProviderConnectorType!: pulumi.Output<string>;
    public readonly l4L7DeviceInterfaceProviderName!: pulumi.Output<string>;
    public readonly l4L7ServiceGraphTemplateDn!: pulumi.Output<string>;
    public readonly managed!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly nameAlias!: pulumi.Output<string>;
    public readonly relationVnsRsDefaultScopeToTerm!: pulumi.Output<string | undefined>;
    public readonly relationVnsRsNodeToAbsFuncProf!: pulumi.Output<string | undefined>;
    public readonly relationVnsRsNodeToCloudLDev!: pulumi.Output<string | undefined>;
    public readonly relationVnsRsNodeToLDev!: pulumi.Output<string | undefined>;
    public readonly relationVnsRsNodeToMFunc!: pulumi.Output<string | undefined>;
    public readonly routingMode!: pulumi.Output<string>;
    public readonly sequenceNumber!: pulumi.Output<string>;
    public readonly shareEncap!: pulumi.Output<string>;

    /**
     * Create a FunctionNode resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FunctionNodeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FunctionNodeArgs | FunctionNodeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FunctionNodeState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["connConsumerDn"] = state ? state.connConsumerDn : undefined;
            resourceInputs["connCopyDn"] = state ? state.connCopyDn : undefined;
            resourceInputs["connProviderDn"] = state ? state.connProviderDn : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["funcTemplateType"] = state ? state.funcTemplateType : undefined;
            resourceInputs["funcType"] = state ? state.funcType : undefined;
            resourceInputs["isCopy"] = state ? state.isCopy : undefined;
            resourceInputs["l4L7DeviceInterfaceConsumerAttachmentNotification"] = state ? state.l4L7DeviceInterfaceConsumerAttachmentNotification : undefined;
            resourceInputs["l4L7DeviceInterfaceConsumerConnectorType"] = state ? state.l4L7DeviceInterfaceConsumerConnectorType : undefined;
            resourceInputs["l4L7DeviceInterfaceConsumerName"] = state ? state.l4L7DeviceInterfaceConsumerName : undefined;
            resourceInputs["l4L7DeviceInterfaceProviderAttachmentNotification"] = state ? state.l4L7DeviceInterfaceProviderAttachmentNotification : undefined;
            resourceInputs["l4L7DeviceInterfaceProviderConnectorType"] = state ? state.l4L7DeviceInterfaceProviderConnectorType : undefined;
            resourceInputs["l4L7DeviceInterfaceProviderName"] = state ? state.l4L7DeviceInterfaceProviderName : undefined;
            resourceInputs["l4L7ServiceGraphTemplateDn"] = state ? state.l4L7ServiceGraphTemplateDn : undefined;
            resourceInputs["managed"] = state ? state.managed : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
            resourceInputs["relationVnsRsDefaultScopeToTerm"] = state ? state.relationVnsRsDefaultScopeToTerm : undefined;
            resourceInputs["relationVnsRsNodeToAbsFuncProf"] = state ? state.relationVnsRsNodeToAbsFuncProf : undefined;
            resourceInputs["relationVnsRsNodeToCloudLDev"] = state ? state.relationVnsRsNodeToCloudLDev : undefined;
            resourceInputs["relationVnsRsNodeToLDev"] = state ? state.relationVnsRsNodeToLDev : undefined;
            resourceInputs["relationVnsRsNodeToMFunc"] = state ? state.relationVnsRsNodeToMFunc : undefined;
            resourceInputs["routingMode"] = state ? state.routingMode : undefined;
            resourceInputs["sequenceNumber"] = state ? state.sequenceNumber : undefined;
            resourceInputs["shareEncap"] = state ? state.shareEncap : undefined;
        } else {
            const args = argsOrState as FunctionNodeArgs | undefined;
            if ((!args || args.l4L7ServiceGraphTemplateDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'l4L7ServiceGraphTemplateDn'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["funcTemplateType"] = args ? args.funcTemplateType : undefined;
            resourceInputs["funcType"] = args ? args.funcType : undefined;
            resourceInputs["isCopy"] = args ? args.isCopy : undefined;
            resourceInputs["l4L7DeviceInterfaceConsumerAttachmentNotification"] = args ? args.l4L7DeviceInterfaceConsumerAttachmentNotification : undefined;
            resourceInputs["l4L7DeviceInterfaceConsumerConnectorType"] = args ? args.l4L7DeviceInterfaceConsumerConnectorType : undefined;
            resourceInputs["l4L7DeviceInterfaceConsumerName"] = args ? args.l4L7DeviceInterfaceConsumerName : undefined;
            resourceInputs["l4L7DeviceInterfaceProviderAttachmentNotification"] = args ? args.l4L7DeviceInterfaceProviderAttachmentNotification : undefined;
            resourceInputs["l4L7DeviceInterfaceProviderConnectorType"] = args ? args.l4L7DeviceInterfaceProviderConnectorType : undefined;
            resourceInputs["l4L7DeviceInterfaceProviderName"] = args ? args.l4L7DeviceInterfaceProviderName : undefined;
            resourceInputs["l4L7ServiceGraphTemplateDn"] = args ? args.l4L7ServiceGraphTemplateDn : undefined;
            resourceInputs["managed"] = args ? args.managed : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
            resourceInputs["relationVnsRsDefaultScopeToTerm"] = args ? args.relationVnsRsDefaultScopeToTerm : undefined;
            resourceInputs["relationVnsRsNodeToAbsFuncProf"] = args ? args.relationVnsRsNodeToAbsFuncProf : undefined;
            resourceInputs["relationVnsRsNodeToCloudLDev"] = args ? args.relationVnsRsNodeToCloudLDev : undefined;
            resourceInputs["relationVnsRsNodeToLDev"] = args ? args.relationVnsRsNodeToLDev : undefined;
            resourceInputs["relationVnsRsNodeToMFunc"] = args ? args.relationVnsRsNodeToMFunc : undefined;
            resourceInputs["routingMode"] = args ? args.routingMode : undefined;
            resourceInputs["sequenceNumber"] = args ? args.sequenceNumber : undefined;
            resourceInputs["shareEncap"] = args ? args.shareEncap : undefined;
            resourceInputs["connConsumerDn"] = undefined /*out*/;
            resourceInputs["connCopyDn"] = undefined /*out*/;
            resourceInputs["connProviderDn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FunctionNode.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FunctionNode resources.
 */
export interface FunctionNodeState {
    annotation?: pulumi.Input<string>;
    connConsumerDn?: pulumi.Input<string>;
    connCopyDn?: pulumi.Input<string>;
    connProviderDn?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    funcTemplateType?: pulumi.Input<string>;
    funcType?: pulumi.Input<string>;
    isCopy?: pulumi.Input<string>;
    l4L7DeviceInterfaceConsumerAttachmentNotification?: pulumi.Input<string>;
    l4L7DeviceInterfaceConsumerConnectorType?: pulumi.Input<string>;
    l4L7DeviceInterfaceConsumerName?: pulumi.Input<string>;
    l4L7DeviceInterfaceProviderAttachmentNotification?: pulumi.Input<string>;
    l4L7DeviceInterfaceProviderConnectorType?: pulumi.Input<string>;
    l4L7DeviceInterfaceProviderName?: pulumi.Input<string>;
    l4L7ServiceGraphTemplateDn?: pulumi.Input<string>;
    managed?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    relationVnsRsDefaultScopeToTerm?: pulumi.Input<string>;
    relationVnsRsNodeToAbsFuncProf?: pulumi.Input<string>;
    relationVnsRsNodeToCloudLDev?: pulumi.Input<string>;
    relationVnsRsNodeToLDev?: pulumi.Input<string>;
    relationVnsRsNodeToMFunc?: pulumi.Input<string>;
    routingMode?: pulumi.Input<string>;
    sequenceNumber?: pulumi.Input<string>;
    shareEncap?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FunctionNode resource.
 */
export interface FunctionNodeArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    funcTemplateType?: pulumi.Input<string>;
    funcType?: pulumi.Input<string>;
    isCopy?: pulumi.Input<string>;
    l4L7DeviceInterfaceConsumerAttachmentNotification?: pulumi.Input<string>;
    l4L7DeviceInterfaceConsumerConnectorType?: pulumi.Input<string>;
    l4L7DeviceInterfaceConsumerName?: pulumi.Input<string>;
    l4L7DeviceInterfaceProviderAttachmentNotification?: pulumi.Input<string>;
    l4L7DeviceInterfaceProviderConnectorType?: pulumi.Input<string>;
    l4L7DeviceInterfaceProviderName?: pulumi.Input<string>;
    l4L7ServiceGraphTemplateDn: pulumi.Input<string>;
    managed?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    relationVnsRsDefaultScopeToTerm?: pulumi.Input<string>;
    relationVnsRsNodeToAbsFuncProf?: pulumi.Input<string>;
    relationVnsRsNodeToCloudLDev?: pulumi.Input<string>;
    relationVnsRsNodeToLDev?: pulumi.Input<string>;
    relationVnsRsNodeToMFunc?: pulumi.Input<string>;
    routingMode?: pulumi.Input<string>;
    sequenceNumber?: pulumi.Input<string>;
    shareEncap?: pulumi.Input<string>;
}
