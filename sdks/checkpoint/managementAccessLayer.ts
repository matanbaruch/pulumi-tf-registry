// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ManagementAccessLayer extends pulumi.CustomResource {
    /**
     * Get an existing ManagementAccessLayer resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ManagementAccessLayerState, opts?: pulumi.CustomResourceOptions): ManagementAccessLayer {
        return new ManagementAccessLayer(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'checkpoint:index/managementAccessLayer:ManagementAccessLayer';

    /**
     * Returns true if the given object is an instance of ManagementAccessLayer.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ManagementAccessLayer {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ManagementAccessLayer.__pulumiType;
    }

    /**
     * Indicates whether to include a cleanup rule in the new layer.
     */
    public readonly addDefaultRule!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to enable Applications & URL Filtering blade on the layer.
     */
    public readonly applicationsAndUrlFiltering!: pulumi.Output<boolean | undefined>;
    /**
     * Color of the object. Should be one of existing colors.
     */
    public readonly color!: pulumi.Output<string | undefined>;
    /**
     * Comments string.
     */
    public readonly comments!: pulumi.Output<string | undefined>;
    /**
     * Whether to enable Content Awareness blade on the layer.
     */
    public readonly contentAwareness!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to use X-Forward-For HTTP header, which is added by the proxy server to keep track of the original source IP.
     */
    public readonly detectUsingXForwardFor!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to enable Firewall blade on the layer.
     */
    public readonly firewall!: pulumi.Output<boolean | undefined>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    public readonly ignoreErrors!: pulumi.Output<boolean | undefined>;
    /**
     * Apply changes ignoring warnings.
     */
    public readonly ignoreWarnings!: pulumi.Output<boolean | undefined>;
    /**
     * The default "catch-all" action for traffic that does not match any explicit or implied rules in the layer.
     */
    public readonly implicitCleanupAction!: pulumi.Output<string | undefined>;
    /**
     * Whether to enable Mobile Access blade on the layer.
     */
    public readonly mobileAccess!: pulumi.Output<boolean | undefined>;
    /**
     * Object name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Whether this layer is shared.
     */
    public readonly shared!: pulumi.Output<boolean | undefined>;
    /**
     * Collection of tag identifiers.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;

    /**
     * Create a ManagementAccessLayer resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ManagementAccessLayerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ManagementAccessLayerArgs | ManagementAccessLayerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ManagementAccessLayerState | undefined;
            resourceInputs["addDefaultRule"] = state ? state.addDefaultRule : undefined;
            resourceInputs["applicationsAndUrlFiltering"] = state ? state.applicationsAndUrlFiltering : undefined;
            resourceInputs["color"] = state ? state.color : undefined;
            resourceInputs["comments"] = state ? state.comments : undefined;
            resourceInputs["contentAwareness"] = state ? state.contentAwareness : undefined;
            resourceInputs["detectUsingXForwardFor"] = state ? state.detectUsingXForwardFor : undefined;
            resourceInputs["firewall"] = state ? state.firewall : undefined;
            resourceInputs["ignoreErrors"] = state ? state.ignoreErrors : undefined;
            resourceInputs["ignoreWarnings"] = state ? state.ignoreWarnings : undefined;
            resourceInputs["implicitCleanupAction"] = state ? state.implicitCleanupAction : undefined;
            resourceInputs["mobileAccess"] = state ? state.mobileAccess : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["shared"] = state ? state.shared : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as ManagementAccessLayerArgs | undefined;
            resourceInputs["addDefaultRule"] = args ? args.addDefaultRule : undefined;
            resourceInputs["applicationsAndUrlFiltering"] = args ? args.applicationsAndUrlFiltering : undefined;
            resourceInputs["color"] = args ? args.color : undefined;
            resourceInputs["comments"] = args ? args.comments : undefined;
            resourceInputs["contentAwareness"] = args ? args.contentAwareness : undefined;
            resourceInputs["detectUsingXForwardFor"] = args ? args.detectUsingXForwardFor : undefined;
            resourceInputs["firewall"] = args ? args.firewall : undefined;
            resourceInputs["ignoreErrors"] = args ? args.ignoreErrors : undefined;
            resourceInputs["ignoreWarnings"] = args ? args.ignoreWarnings : undefined;
            resourceInputs["implicitCleanupAction"] = args ? args.implicitCleanupAction : undefined;
            resourceInputs["mobileAccess"] = args ? args.mobileAccess : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["shared"] = args ? args.shared : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ManagementAccessLayer.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ManagementAccessLayer resources.
 */
export interface ManagementAccessLayerState {
    /**
     * Indicates whether to include a cleanup rule in the new layer.
     */
    addDefaultRule?: pulumi.Input<boolean>;
    /**
     * Whether to enable Applications & URL Filtering blade on the layer.
     */
    applicationsAndUrlFiltering?: pulumi.Input<boolean>;
    /**
     * Color of the object. Should be one of existing colors.
     */
    color?: pulumi.Input<string>;
    /**
     * Comments string.
     */
    comments?: pulumi.Input<string>;
    /**
     * Whether to enable Content Awareness blade on the layer.
     */
    contentAwareness?: pulumi.Input<boolean>;
    /**
     * Whether to use X-Forward-For HTTP header, which is added by the proxy server to keep track of the original source IP.
     */
    detectUsingXForwardFor?: pulumi.Input<boolean>;
    /**
     * Whether to enable Firewall blade on the layer.
     */
    firewall?: pulumi.Input<boolean>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * Apply changes ignoring warnings.
     */
    ignoreWarnings?: pulumi.Input<boolean>;
    /**
     * The default "catch-all" action for traffic that does not match any explicit or implied rules in the layer.
     */
    implicitCleanupAction?: pulumi.Input<string>;
    /**
     * Whether to enable Mobile Access blade on the layer.
     */
    mobileAccess?: pulumi.Input<boolean>;
    /**
     * Object name.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether this layer is shared.
     */
    shared?: pulumi.Input<boolean>;
    /**
     * Collection of tag identifiers.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ManagementAccessLayer resource.
 */
export interface ManagementAccessLayerArgs {
    /**
     * Indicates whether to include a cleanup rule in the new layer.
     */
    addDefaultRule?: pulumi.Input<boolean>;
    /**
     * Whether to enable Applications & URL Filtering blade on the layer.
     */
    applicationsAndUrlFiltering?: pulumi.Input<boolean>;
    /**
     * Color of the object. Should be one of existing colors.
     */
    color?: pulumi.Input<string>;
    /**
     * Comments string.
     */
    comments?: pulumi.Input<string>;
    /**
     * Whether to enable Content Awareness blade on the layer.
     */
    contentAwareness?: pulumi.Input<boolean>;
    /**
     * Whether to use X-Forward-For HTTP header, which is added by the proxy server to keep track of the original source IP.
     */
    detectUsingXForwardFor?: pulumi.Input<boolean>;
    /**
     * Whether to enable Firewall blade on the layer.
     */
    firewall?: pulumi.Input<boolean>;
    /**
     * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted -
     * warnings will also be ignored.
     */
    ignoreErrors?: pulumi.Input<boolean>;
    /**
     * Apply changes ignoring warnings.
     */
    ignoreWarnings?: pulumi.Input<boolean>;
    /**
     * The default "catch-all" action for traffic that does not match any explicit or implied rules in the layer.
     */
    implicitCleanupAction?: pulumi.Input<string>;
    /**
     * Whether to enable Mobile Access blade on the layer.
     */
    mobileAccess?: pulumi.Input<boolean>;
    /**
     * Object name.
     */
    name?: pulumi.Input<string>;
    /**
     * Whether this layer is shared.
     */
    shared?: pulumi.Input<boolean>;
    /**
     * Collection of tag identifiers.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
}
