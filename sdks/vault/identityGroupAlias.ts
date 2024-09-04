// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IdentityGroupAlias extends pulumi.CustomResource {
    /**
     * Get an existing IdentityGroupAlias resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IdentityGroupAliasState, opts?: pulumi.CustomResourceOptions): IdentityGroupAlias {
        return new IdentityGroupAlias(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vault:index/identityGroupAlias:IdentityGroupAlias';

    /**
     * Returns true if the given object is an instance of IdentityGroupAlias.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IdentityGroupAlias {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IdentityGroupAlias.__pulumiType;
    }

    /**
     * ID of the group to which this is an alias.
     */
    public readonly canonicalId!: pulumi.Output<string>;
    /**
     * Mount accessor to which this alias belongs to.
     */
    public readonly mountAccessor!: pulumi.Output<string>;
    /**
     * Name of the group alias.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    public readonly namespace!: pulumi.Output<string | undefined>;

    /**
     * Create a IdentityGroupAlias resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IdentityGroupAliasArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IdentityGroupAliasArgs | IdentityGroupAliasState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IdentityGroupAliasState | undefined;
            resourceInputs["canonicalId"] = state ? state.canonicalId : undefined;
            resourceInputs["mountAccessor"] = state ? state.mountAccessor : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
        } else {
            const args = argsOrState as IdentityGroupAliasArgs | undefined;
            if ((!args || args.canonicalId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'canonicalId'");
            }
            if ((!args || args.mountAccessor === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mountAccessor'");
            }
            resourceInputs["canonicalId"] = args ? args.canonicalId : undefined;
            resourceInputs["mountAccessor"] = args ? args.mountAccessor : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IdentityGroupAlias.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IdentityGroupAlias resources.
 */
export interface IdentityGroupAliasState {
    /**
     * ID of the group to which this is an alias.
     */
    canonicalId?: pulumi.Input<string>;
    /**
     * Mount accessor to which this alias belongs to.
     */
    mountAccessor?: pulumi.Input<string>;
    /**
     * Name of the group alias.
     */
    name?: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IdentityGroupAlias resource.
 */
export interface IdentityGroupAliasArgs {
    /**
     * ID of the group to which this is an alias.
     */
    canonicalId: pulumi.Input<string>;
    /**
     * Mount accessor to which this alias belongs to.
     */
    mountAccessor: pulumi.Input<string>;
    /**
     * Name of the group alias.
     */
    name?: pulumi.Input<string>;
    /**
     * Target namespace. (requires Enterprise)
     */
    namespace?: pulumi.Input<string>;
}
