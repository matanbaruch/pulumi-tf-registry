// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Repository extends pulumi.CustomResource {
    /**
     * Get an existing Repository resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RepositoryState, opts?: pulumi.CustomResourceOptions): Repository {
        return new Repository(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'project:index/repository:Repository';

    /**
     * Returns true if the given object is an instance of Repository.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Repository {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Repository.__pulumiType;
    }

    /**
     * The key of the repository.
     */
    public readonly key!: pulumi.Output<string>;
    /**
     * The key of the project to which the repository should be assigned to.
     */
    public readonly projectKey!: pulumi.Output<string>;

    /**
     * Create a Repository resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RepositoryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RepositoryArgs | RepositoryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RepositoryState | undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["projectKey"] = state ? state.projectKey : undefined;
        } else {
            const args = argsOrState as RepositoryArgs | undefined;
            if ((!args || args.key === undefined) && !opts.urn) {
                throw new Error("Missing required property 'key'");
            }
            if ((!args || args.projectKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectKey'");
            }
            resourceInputs["key"] = args ? args.key : undefined;
            resourceInputs["projectKey"] = args ? args.projectKey : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Repository.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Repository resources.
 */
export interface RepositoryState {
    /**
     * The key of the repository.
     */
    key?: pulumi.Input<string>;
    /**
     * The key of the project to which the repository should be assigned to.
     */
    projectKey?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Repository resource.
 */
export interface RepositoryArgs {
    /**
     * The key of the repository.
     */
    key: pulumi.Input<string>;
    /**
     * The key of the project to which the repository should be assigned to.
     */
    projectKey: pulumi.Input<string>;
}
