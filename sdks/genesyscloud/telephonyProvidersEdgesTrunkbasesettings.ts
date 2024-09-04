// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class TelephonyProvidersEdgesTrunkbasesettings extends pulumi.CustomResource {
    /**
     * Get an existing TelephonyProvidersEdgesTrunkbasesettings resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TelephonyProvidersEdgesTrunkbasesettingsState, opts?: pulumi.CustomResourceOptions): TelephonyProvidersEdgesTrunkbasesettings {
        return new TelephonyProvidersEdgesTrunkbasesettings(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'genesyscloud:index/telephonyProvidersEdgesTrunkbasesettings:TelephonyProvidersEdgesTrunkbasesettings';

    /**
     * Returns true if the given object is an instance of TelephonyProvidersEdgesTrunkbasesettings.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TelephonyProvidersEdgesTrunkbasesettings {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TelephonyProvidersEdgesTrunkbasesettings.__pulumiType;
    }

    /**
     * The resource's description.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The site to which inbound calls will be routed. Only valid for External BYOC Trunks.
     */
    public readonly inboundSiteId!: pulumi.Output<string | undefined>;
    /**
     * Is this trunk being managed remotely. This property is synchronized with the managed property of the Edge Group to which
     * it is assigned.
     */
    public readonly managed!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the entity.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * trunk base settings properties
     */
    public readonly properties!: pulumi.Output<string>;
    /**
     * The resource's state.
     */
    public readonly state!: pulumi.Output<string>;
    /**
     * The meta-base this trunk is based on.
     */
    public readonly trunkMetaBaseId!: pulumi.Output<string>;
    /**
     * The type of this trunk base.Valid values: EXTERNAL, PHONE, EDGE.
     */
    public readonly trunkType!: pulumi.Output<string>;

    /**
     * Create a TelephonyProvidersEdgesTrunkbasesettings resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: TelephonyProvidersEdgesTrunkbasesettingsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TelephonyProvidersEdgesTrunkbasesettingsArgs | TelephonyProvidersEdgesTrunkbasesettingsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TelephonyProvidersEdgesTrunkbasesettingsState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["inboundSiteId"] = state ? state.inboundSiteId : undefined;
            resourceInputs["managed"] = state ? state.managed : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["properties"] = state ? state.properties : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["trunkMetaBaseId"] = state ? state.trunkMetaBaseId : undefined;
            resourceInputs["trunkType"] = state ? state.trunkType : undefined;
        } else {
            const args = argsOrState as TelephonyProvidersEdgesTrunkbasesettingsArgs | undefined;
            if ((!args || args.trunkMetaBaseId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'trunkMetaBaseId'");
            }
            if ((!args || args.trunkType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'trunkType'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["inboundSiteId"] = args ? args.inboundSiteId : undefined;
            resourceInputs["managed"] = args ? args.managed : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["trunkMetaBaseId"] = args ? args.trunkMetaBaseId : undefined;
            resourceInputs["trunkType"] = args ? args.trunkType : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TelephonyProvidersEdgesTrunkbasesettings.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TelephonyProvidersEdgesTrunkbasesettings resources.
 */
export interface TelephonyProvidersEdgesTrunkbasesettingsState {
    /**
     * The resource's description.
     */
    description?: pulumi.Input<string>;
    /**
     * The site to which inbound calls will be routed. Only valid for External BYOC Trunks.
     */
    inboundSiteId?: pulumi.Input<string>;
    /**
     * Is this trunk being managed remotely. This property is synchronized with the managed property of the Edge Group to which
     * it is assigned.
     */
    managed?: pulumi.Input<boolean>;
    /**
     * The name of the entity.
     */
    name?: pulumi.Input<string>;
    /**
     * trunk base settings properties
     */
    properties?: pulumi.Input<string>;
    /**
     * The resource's state.
     */
    state?: pulumi.Input<string>;
    /**
     * The meta-base this trunk is based on.
     */
    trunkMetaBaseId?: pulumi.Input<string>;
    /**
     * The type of this trunk base.Valid values: EXTERNAL, PHONE, EDGE.
     */
    trunkType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a TelephonyProvidersEdgesTrunkbasesettings resource.
 */
export interface TelephonyProvidersEdgesTrunkbasesettingsArgs {
    /**
     * The resource's description.
     */
    description?: pulumi.Input<string>;
    /**
     * The site to which inbound calls will be routed. Only valid for External BYOC Trunks.
     */
    inboundSiteId?: pulumi.Input<string>;
    /**
     * Is this trunk being managed remotely. This property is synchronized with the managed property of the Edge Group to which
     * it is assigned.
     */
    managed?: pulumi.Input<boolean>;
    /**
     * The name of the entity.
     */
    name?: pulumi.Input<string>;
    /**
     * trunk base settings properties
     */
    properties?: pulumi.Input<string>;
    /**
     * The resource's state.
     */
    state?: pulumi.Input<string>;
    /**
     * The meta-base this trunk is based on.
     */
    trunkMetaBaseId: pulumi.Input<string>;
    /**
     * The type of this trunk base.Valid values: EXTERNAL, PHONE, EDGE.
     */
    trunkType: pulumi.Input<string>;
}
