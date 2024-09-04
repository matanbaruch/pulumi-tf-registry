// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Tenant extends pulumi.CustomResource {
    /**
     * Get an existing Tenant resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TenantState, opts?: pulumi.CustomResourceOptions): Tenant {
        return new Tenant(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/tenant:Tenant';

    /**
     * Returns true if the given object is an instance of Tenant.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Tenant {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Tenant.__pulumiType;
    }

    public readonly annotation!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly nameAlias!: pulumi.Output<string>;
    public readonly relationFvRsTenantMonPol!: pulumi.Output<string>;
    public readonly relationFvRsTnDenyRules!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Tenant resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TenantArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TenantArgs | TenantState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TenantState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
            resourceInputs["relationFvRsTenantMonPol"] = state ? state.relationFvRsTenantMonPol : undefined;
            resourceInputs["relationFvRsTnDenyRules"] = state ? state.relationFvRsTnDenyRules : undefined;
        } else {
            const args = argsOrState as TenantArgs | undefined;
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
            resourceInputs["relationFvRsTenantMonPol"] = args ? args.relationFvRsTenantMonPol : undefined;
            resourceInputs["relationFvRsTnDenyRules"] = args ? args.relationFvRsTnDenyRules : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Tenant.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Tenant resources.
 */
export interface TenantState {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    relationFvRsTenantMonPol?: pulumi.Input<string>;
    relationFvRsTnDenyRules?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Tenant resource.
 */
export interface TenantArgs {
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
    relationFvRsTenantMonPol?: pulumi.Input<string>;
    relationFvRsTnDenyRules?: pulumi.Input<pulumi.Input<string>[]>;
}
