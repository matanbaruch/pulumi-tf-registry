// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RolesanywhereTrustAnchor extends pulumi.CustomResource {
    /**
     * Get an existing RolesanywhereTrustAnchor resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RolesanywhereTrustAnchorState, opts?: pulumi.CustomResourceOptions): RolesanywhereTrustAnchor {
        return new RolesanywhereTrustAnchor(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/rolesanywhereTrustAnchor:RolesanywhereTrustAnchor';

    /**
     * Returns true if the given object is an instance of RolesanywhereTrustAnchor.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RolesanywhereTrustAnchor {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RolesanywhereTrustAnchor.__pulumiType;
    }

    public readonly enabled!: pulumi.Output<boolean>;
    public readonly name!: pulumi.Output<string>;
    public readonly notificationSettings!: pulumi.Output<outputs.RolesanywhereTrustAnchorNotificationSetting[]>;
    public readonly source!: pulumi.Output<outputs.RolesanywhereTrustAnchorSource>;
    public readonly tags!: pulumi.Output<outputs.RolesanywhereTrustAnchorTag[]>;
    public /*out*/ readonly trustAnchorArn!: pulumi.Output<string>;
    public /*out*/ readonly trustAnchorId!: pulumi.Output<string>;

    /**
     * Create a RolesanywhereTrustAnchor resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RolesanywhereTrustAnchorArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RolesanywhereTrustAnchorArgs | RolesanywhereTrustAnchorState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RolesanywhereTrustAnchorState | undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notificationSettings"] = state ? state.notificationSettings : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["trustAnchorArn"] = state ? state.trustAnchorArn : undefined;
            resourceInputs["trustAnchorId"] = state ? state.trustAnchorId : undefined;
        } else {
            const args = argsOrState as RolesanywhereTrustAnchorArgs | undefined;
            if ((!args || args.source === undefined) && !opts.urn) {
                throw new Error("Missing required property 'source'");
            }
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["notificationSettings"] = args ? args.notificationSettings : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["trustAnchorArn"] = undefined /*out*/;
            resourceInputs["trustAnchorId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RolesanywhereTrustAnchor.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RolesanywhereTrustAnchor resources.
 */
export interface RolesanywhereTrustAnchorState {
    enabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    notificationSettings?: pulumi.Input<pulumi.Input<inputs.RolesanywhereTrustAnchorNotificationSetting>[]>;
    source?: pulumi.Input<inputs.RolesanywhereTrustAnchorSource>;
    tags?: pulumi.Input<pulumi.Input<inputs.RolesanywhereTrustAnchorTag>[]>;
    trustAnchorArn?: pulumi.Input<string>;
    trustAnchorId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RolesanywhereTrustAnchor resource.
 */
export interface RolesanywhereTrustAnchorArgs {
    enabled?: pulumi.Input<boolean>;
    name?: pulumi.Input<string>;
    notificationSettings?: pulumi.Input<pulumi.Input<inputs.RolesanywhereTrustAnchorNotificationSetting>[]>;
    source: pulumi.Input<inputs.RolesanywhereTrustAnchorSource>;
    tags?: pulumi.Input<pulumi.Input<inputs.RolesanywhereTrustAnchorTag>[]>;
}
