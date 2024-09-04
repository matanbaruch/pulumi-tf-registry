// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class MsgVpnClientUsernameAttribute extends pulumi.CustomResource {
    /**
     * Get an existing MsgVpnClientUsernameAttribute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsgVpnClientUsernameAttributeState, opts?: pulumi.CustomResourceOptions): MsgVpnClientUsernameAttribute {
        return new MsgVpnClientUsernameAttribute(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'solacebrokerappliance:index/msgVpnClientUsernameAttribute:MsgVpnClientUsernameAttribute';

    /**
     * Returns true if the given object is an instance of MsgVpnClientUsernameAttribute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MsgVpnClientUsernameAttribute {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MsgVpnClientUsernameAttribute.__pulumiType;
    }

    /**
     * The name of the Attribute.
     */
    public readonly attributeName!: pulumi.Output<string>;
    /**
     * The value of the Attribute.
     */
    public readonly attributeValue!: pulumi.Output<string>;
    /**
     * The name of the Client Username.
     */
    public readonly clientUsername!: pulumi.Output<string>;
    /**
     * The name of the Message VPN.
     */
    public readonly msgVpnName!: pulumi.Output<string>;

    /**
     * Create a MsgVpnClientUsernameAttribute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsgVpnClientUsernameAttributeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MsgVpnClientUsernameAttributeArgs | MsgVpnClientUsernameAttributeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MsgVpnClientUsernameAttributeState | undefined;
            resourceInputs["attributeName"] = state ? state.attributeName : undefined;
            resourceInputs["attributeValue"] = state ? state.attributeValue : undefined;
            resourceInputs["clientUsername"] = state ? state.clientUsername : undefined;
            resourceInputs["msgVpnName"] = state ? state.msgVpnName : undefined;
        } else {
            const args = argsOrState as MsgVpnClientUsernameAttributeArgs | undefined;
            if ((!args || args.attributeName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'attributeName'");
            }
            if ((!args || args.attributeValue === undefined) && !opts.urn) {
                throw new Error("Missing required property 'attributeValue'");
            }
            if ((!args || args.clientUsername === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clientUsername'");
            }
            if ((!args || args.msgVpnName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'msgVpnName'");
            }
            resourceInputs["attributeName"] = args ? args.attributeName : undefined;
            resourceInputs["attributeValue"] = args ? args.attributeValue : undefined;
            resourceInputs["clientUsername"] = args ? args.clientUsername : undefined;
            resourceInputs["msgVpnName"] = args ? args.msgVpnName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MsgVpnClientUsernameAttribute.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MsgVpnClientUsernameAttribute resources.
 */
export interface MsgVpnClientUsernameAttributeState {
    /**
     * The name of the Attribute.
     */
    attributeName?: pulumi.Input<string>;
    /**
     * The value of the Attribute.
     */
    attributeValue?: pulumi.Input<string>;
    /**
     * The name of the Client Username.
     */
    clientUsername?: pulumi.Input<string>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a MsgVpnClientUsernameAttribute resource.
 */
export interface MsgVpnClientUsernameAttributeArgs {
    /**
     * The name of the Attribute.
     */
    attributeName: pulumi.Input<string>;
    /**
     * The value of the Attribute.
     */
    attributeValue: pulumi.Input<string>;
    /**
     * The name of the Client Username.
     */
    clientUsername: pulumi.Input<string>;
    /**
     * The name of the Message VPN.
     */
    msgVpnName: pulumi.Input<string>;
}
