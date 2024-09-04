// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ShareRepository extends pulumi.CustomResource {
    /**
     * Get an existing ShareRepository resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ShareRepositoryState, opts?: pulumi.CustomResourceOptions): ShareRepository {
        return new ShareRepository(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'project:index/shareRepository:ShareRepository';

    /**
     * Returns true if the given object is an instance of ShareRepository.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ShareRepository {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ShareRepository.__pulumiType;
    }

    /**
     * The key of the repository.
     */
    public readonly repoKey!: pulumi.Output<string>;
    /**
     * The project key to which the repository should be shared with.
     */
    public readonly targetProjectKey!: pulumi.Output<string>;

    /**
     * Create a ShareRepository resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ShareRepositoryArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ShareRepositoryArgs | ShareRepositoryState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ShareRepositoryState | undefined;
            resourceInputs["repoKey"] = state ? state.repoKey : undefined;
            resourceInputs["targetProjectKey"] = state ? state.targetProjectKey : undefined;
        } else {
            const args = argsOrState as ShareRepositoryArgs | undefined;
            if ((!args || args.repoKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'repoKey'");
            }
            if ((!args || args.targetProjectKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetProjectKey'");
            }
            resourceInputs["repoKey"] = args ? args.repoKey : undefined;
            resourceInputs["targetProjectKey"] = args ? args.targetProjectKey : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ShareRepository.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ShareRepository resources.
 */
export interface ShareRepositoryState {
    /**
     * The key of the repository.
     */
    repoKey?: pulumi.Input<string>;
    /**
     * The project key to which the repository should be shared with.
     */
    targetProjectKey?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ShareRepository resource.
 */
export interface ShareRepositoryArgs {
    /**
     * The key of the repository.
     */
    repoKey: pulumi.Input<string>;
    /**
     * The project key to which the repository should be shared with.
     */
    targetProjectKey: pulumi.Input<string>;
}
