// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Namespace extends pulumi.CustomResource {
    /**
     * Get an existing Namespace resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NamespaceState, opts?: pulumi.CustomResourceOptions): Namespace {
        return new Namespace(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'consul:index/namespace:Namespace';

    /**
     * Returns true if the given object is an instance of Namespace.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Namespace {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Namespace.__pulumiType;
    }

    public readonly description!: pulumi.Output<string | undefined>;
    public readonly meta!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly name!: pulumi.Output<string>;
    /**
     * The partition the namespace is associated with.
     */
    public readonly partition!: pulumi.Output<string | undefined>;
    public readonly policyDefaults!: pulumi.Output<string[] | undefined>;
    public readonly roleDefaults!: pulumi.Output<string[] | undefined>;

    /**
     * Create a Namespace resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NamespaceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NamespaceArgs | NamespaceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NamespaceState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["meta"] = state ? state.meta : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["partition"] = state ? state.partition : undefined;
            resourceInputs["policyDefaults"] = state ? state.policyDefaults : undefined;
            resourceInputs["roleDefaults"] = state ? state.roleDefaults : undefined;
        } else {
            const args = argsOrState as NamespaceArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["meta"] = args ? args.meta : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["partition"] = args ? args.partition : undefined;
            resourceInputs["policyDefaults"] = args ? args.policyDefaults : undefined;
            resourceInputs["roleDefaults"] = args ? args.roleDefaults : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Namespace.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Namespace resources.
 */
export interface NamespaceState {
    description?: pulumi.Input<string>;
    meta?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    /**
     * The partition the namespace is associated with.
     */
    partition?: pulumi.Input<string>;
    policyDefaults?: pulumi.Input<pulumi.Input<string>[]>;
    roleDefaults?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a Namespace resource.
 */
export interface NamespaceArgs {
    description?: pulumi.Input<string>;
    meta?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    /**
     * The partition the namespace is associated with.
     */
    partition?: pulumi.Input<string>;
    policyDefaults?: pulumi.Input<pulumi.Input<string>[]>;
    roleDefaults?: pulumi.Input<pulumi.Input<string>[]>;
}
