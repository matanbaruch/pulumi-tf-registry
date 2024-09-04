// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Gplink extends pulumi.CustomResource {
    /**
     * Get an existing Gplink resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GplinkState, opts?: pulumi.CustomResourceOptions): Gplink {
        return new Gplink(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ad:index/gplink:Gplink';

    /**
     * Returns true if the given object is an instance of Gplink.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Gplink {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Gplink.__pulumiType;
    }

    /**
     * Controls the state of the GP link between a GPO and a container object.
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    /**
     * If set to true, the GPO will be enforced on the container object.
     */
    public readonly enforced!: pulumi.Output<boolean | undefined>;
    /**
     * The GUID of the GPO that will be linked to the container object.
     */
    public readonly gpoGuid!: pulumi.Output<string>;
    /**
     * Sets the precedence between multiple GPOs linked to the same container object.
     */
    public readonly order!: pulumi.Output<number | undefined>;
    /**
     * The DN of the object the GPO will be linked to.
     */
    public readonly targetDn!: pulumi.Output<string>;

    /**
     * Create a Gplink resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GplinkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GplinkArgs | GplinkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GplinkState | undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["enforced"] = state ? state.enforced : undefined;
            resourceInputs["gpoGuid"] = state ? state.gpoGuid : undefined;
            resourceInputs["order"] = state ? state.order : undefined;
            resourceInputs["targetDn"] = state ? state.targetDn : undefined;
        } else {
            const args = argsOrState as GplinkArgs | undefined;
            if ((!args || args.gpoGuid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gpoGuid'");
            }
            if ((!args || args.targetDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetDn'");
            }
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["enforced"] = args ? args.enforced : undefined;
            resourceInputs["gpoGuid"] = args ? args.gpoGuid : undefined;
            resourceInputs["order"] = args ? args.order : undefined;
            resourceInputs["targetDn"] = args ? args.targetDn : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Gplink.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Gplink resources.
 */
export interface GplinkState {
    /**
     * Controls the state of the GP link between a GPO and a container object.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * If set to true, the GPO will be enforced on the container object.
     */
    enforced?: pulumi.Input<boolean>;
    /**
     * The GUID of the GPO that will be linked to the container object.
     */
    gpoGuid?: pulumi.Input<string>;
    /**
     * Sets the precedence between multiple GPOs linked to the same container object.
     */
    order?: pulumi.Input<number>;
    /**
     * The DN of the object the GPO will be linked to.
     */
    targetDn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Gplink resource.
 */
export interface GplinkArgs {
    /**
     * Controls the state of the GP link between a GPO and a container object.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * If set to true, the GPO will be enforced on the container object.
     */
    enforced?: pulumi.Input<boolean>;
    /**
     * The GUID of the GPO that will be linked to the container object.
     */
    gpoGuid: pulumi.Input<string>;
    /**
     * Sets the precedence between multiple GPOs linked to the same container object.
     */
    order?: pulumi.Input<number>;
    /**
     * The DN of the object the GPO will be linked to.
     */
    targetDn: pulumi.Input<string>;
}
