// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DependabotOrganizationSecretRepositories extends pulumi.CustomResource {
    /**
     * Get an existing DependabotOrganizationSecretRepositories resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DependabotOrganizationSecretRepositoriesState, opts?: pulumi.CustomResourceOptions): DependabotOrganizationSecretRepositories {
        return new DependabotOrganizationSecretRepositories(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'github:index/dependabotOrganizationSecretRepositories:DependabotOrganizationSecretRepositories';

    /**
     * Returns true if the given object is an instance of DependabotOrganizationSecretRepositories.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DependabotOrganizationSecretRepositories {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DependabotOrganizationSecretRepositories.__pulumiType;
    }

    /**
     * Name of the existing secret.
     */
    public readonly secretName!: pulumi.Output<string>;
    /**
     * An array of repository ids that can access the organization secret.
     */
    public readonly selectedRepositoryIds!: pulumi.Output<number[]>;

    /**
     * Create a DependabotOrganizationSecretRepositories resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DependabotOrganizationSecretRepositoriesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DependabotOrganizationSecretRepositoriesArgs | DependabotOrganizationSecretRepositoriesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DependabotOrganizationSecretRepositoriesState | undefined;
            resourceInputs["secretName"] = state ? state.secretName : undefined;
            resourceInputs["selectedRepositoryIds"] = state ? state.selectedRepositoryIds : undefined;
        } else {
            const args = argsOrState as DependabotOrganizationSecretRepositoriesArgs | undefined;
            if ((!args || args.secretName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'secretName'");
            }
            if ((!args || args.selectedRepositoryIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'selectedRepositoryIds'");
            }
            resourceInputs["secretName"] = args ? args.secretName : undefined;
            resourceInputs["selectedRepositoryIds"] = args ? args.selectedRepositoryIds : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DependabotOrganizationSecretRepositories.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DependabotOrganizationSecretRepositories resources.
 */
export interface DependabotOrganizationSecretRepositoriesState {
    /**
     * Name of the existing secret.
     */
    secretName?: pulumi.Input<string>;
    /**
     * An array of repository ids that can access the organization secret.
     */
    selectedRepositoryIds?: pulumi.Input<pulumi.Input<number>[]>;
}

/**
 * The set of arguments for constructing a DependabotOrganizationSecretRepositories resource.
 */
export interface DependabotOrganizationSecretRepositoriesArgs {
    /**
     * Name of the existing secret.
     */
    secretName: pulumi.Input<string>;
    /**
     * An array of repository ids that can access the organization secret.
     */
    selectedRepositoryIds: pulumi.Input<pulumi.Input<number>[]>;
}
