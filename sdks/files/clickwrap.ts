// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Clickwrap extends pulumi.CustomResource {
    /**
     * Get an existing Clickwrap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClickwrapState, opts?: pulumi.CustomResourceOptions): Clickwrap {
        return new Clickwrap(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'files:index/clickwrap:Clickwrap';

    /**
     * Returns true if the given object is an instance of Clickwrap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Clickwrap {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Clickwrap.__pulumiType;
    }

    /**
     * Body text of Clickwrap (supports Markdown formatting).
     */
    public readonly body!: pulumi.Output<string>;
    /**
     * Name of the Clickwrap agreement (used when selecting from multiple Clickwrap agreements.)
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Use this Clickwrap for Bundles?
     */
    public readonly useWithBundles!: pulumi.Output<string>;
    /**
     * Use this Clickwrap for Inboxes?
     */
    public readonly useWithInboxes!: pulumi.Output<string>;
    /**
     * Use this Clickwrap for User Registrations? Note: This only applies to User Registrations where the User is invited to
     * your Files.com site using an E-Mail invitation process where they then set their own password.
     */
    public readonly useWithUsers!: pulumi.Output<string>;

    /**
     * Create a Clickwrap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ClickwrapArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClickwrapArgs | ClickwrapState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClickwrapState | undefined;
            resourceInputs["body"] = state ? state.body : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["useWithBundles"] = state ? state.useWithBundles : undefined;
            resourceInputs["useWithInboxes"] = state ? state.useWithInboxes : undefined;
            resourceInputs["useWithUsers"] = state ? state.useWithUsers : undefined;
        } else {
            const args = argsOrState as ClickwrapArgs | undefined;
            resourceInputs["body"] = args ? args.body : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["useWithBundles"] = args ? args.useWithBundles : undefined;
            resourceInputs["useWithInboxes"] = args ? args.useWithInboxes : undefined;
            resourceInputs["useWithUsers"] = args ? args.useWithUsers : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Clickwrap.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Clickwrap resources.
 */
export interface ClickwrapState {
    /**
     * Body text of Clickwrap (supports Markdown formatting).
     */
    body?: pulumi.Input<string>;
    /**
     * Name of the Clickwrap agreement (used when selecting from multiple Clickwrap agreements.)
     */
    name?: pulumi.Input<string>;
    /**
     * Use this Clickwrap for Bundles?
     */
    useWithBundles?: pulumi.Input<string>;
    /**
     * Use this Clickwrap for Inboxes?
     */
    useWithInboxes?: pulumi.Input<string>;
    /**
     * Use this Clickwrap for User Registrations? Note: This only applies to User Registrations where the User is invited to
     * your Files.com site using an E-Mail invitation process where they then set their own password.
     */
    useWithUsers?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Clickwrap resource.
 */
export interface ClickwrapArgs {
    /**
     * Body text of Clickwrap (supports Markdown formatting).
     */
    body?: pulumi.Input<string>;
    /**
     * Name of the Clickwrap agreement (used when selecting from multiple Clickwrap agreements.)
     */
    name?: pulumi.Input<string>;
    /**
     * Use this Clickwrap for Bundles?
     */
    useWithBundles?: pulumi.Input<string>;
    /**
     * Use this Clickwrap for Inboxes?
     */
    useWithInboxes?: pulumi.Input<string>;
    /**
     * Use this Clickwrap for User Registrations? Note: This only applies to User Registrations where the User is invited to
     * your Files.com site using an E-Mail invitation process where they then set their own password.
     */
    useWithUsers?: pulumi.Input<string>;
}
