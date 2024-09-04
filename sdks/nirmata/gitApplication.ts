// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class GitApplication extends pulumi.CustomResource {
    /**
     * Get an existing GitApplication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GitApplicationState, opts?: pulumi.CustomResourceOptions): GitApplication {
        return new GitApplication(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nirmata:index/gitApplication:GitApplication';

    /**
     * Returns true if the given object is an instance of GitApplication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GitApplication {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GitApplication.__pulumiType;
    }

    public readonly catalog!: pulumi.Output<string>;
    public readonly fixedKustomization!: pulumi.Output<boolean | undefined>;
    public readonly gitBranch!: pulumi.Output<string>;
    public readonly gitCredentials!: pulumi.Output<string>;
    public readonly gitDirectoryLists!: pulumi.Output<string[] | undefined>;
    public readonly gitIncludeLists!: pulumi.Output<string[] | undefined>;
    public readonly gitRepository!: pulumi.Output<string>;
    public readonly kustomizationFilePath!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly namespace!: pulumi.Output<string | undefined>;
    public /*out*/ readonly releaseName!: pulumi.Output<string>;
    public readonly targetBasedKustomization!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a GitApplication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GitApplicationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GitApplicationArgs | GitApplicationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GitApplicationState | undefined;
            resourceInputs["catalog"] = state ? state.catalog : undefined;
            resourceInputs["fixedKustomization"] = state ? state.fixedKustomization : undefined;
            resourceInputs["gitBranch"] = state ? state.gitBranch : undefined;
            resourceInputs["gitCredentials"] = state ? state.gitCredentials : undefined;
            resourceInputs["gitDirectoryLists"] = state ? state.gitDirectoryLists : undefined;
            resourceInputs["gitIncludeLists"] = state ? state.gitIncludeLists : undefined;
            resourceInputs["gitRepository"] = state ? state.gitRepository : undefined;
            resourceInputs["kustomizationFilePath"] = state ? state.kustomizationFilePath : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["releaseName"] = state ? state.releaseName : undefined;
            resourceInputs["targetBasedKustomization"] = state ? state.targetBasedKustomization : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as GitApplicationArgs | undefined;
            if ((!args || args.catalog === undefined) && !opts.urn) {
                throw new Error("Missing required property 'catalog'");
            }
            if ((!args || args.gitBranch === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gitBranch'");
            }
            if ((!args || args.gitCredentials === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gitCredentials'");
            }
            if ((!args || args.gitRepository === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gitRepository'");
            }
            resourceInputs["catalog"] = args ? args.catalog : undefined;
            resourceInputs["fixedKustomization"] = args ? args.fixedKustomization : undefined;
            resourceInputs["gitBranch"] = args ? args.gitBranch : undefined;
            resourceInputs["gitCredentials"] = args ? args.gitCredentials : undefined;
            resourceInputs["gitDirectoryLists"] = args ? args.gitDirectoryLists : undefined;
            resourceInputs["gitIncludeLists"] = args ? args.gitIncludeLists : undefined;
            resourceInputs["gitRepository"] = args ? args.gitRepository : undefined;
            resourceInputs["kustomizationFilePath"] = args ? args.kustomizationFilePath : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["targetBasedKustomization"] = args ? args.targetBasedKustomization : undefined;
            resourceInputs["releaseName"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GitApplication.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GitApplication resources.
 */
export interface GitApplicationState {
    catalog?: pulumi.Input<string>;
    fixedKustomization?: pulumi.Input<boolean>;
    gitBranch?: pulumi.Input<string>;
    gitCredentials?: pulumi.Input<string>;
    gitDirectoryLists?: pulumi.Input<pulumi.Input<string>[]>;
    gitIncludeLists?: pulumi.Input<pulumi.Input<string>[]>;
    gitRepository?: pulumi.Input<string>;
    kustomizationFilePath?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    releaseName?: pulumi.Input<string>;
    targetBasedKustomization?: pulumi.Input<boolean>;
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GitApplication resource.
 */
export interface GitApplicationArgs {
    catalog: pulumi.Input<string>;
    fixedKustomization?: pulumi.Input<boolean>;
    gitBranch: pulumi.Input<string>;
    gitCredentials: pulumi.Input<string>;
    gitDirectoryLists?: pulumi.Input<pulumi.Input<string>[]>;
    gitIncludeLists?: pulumi.Input<pulumi.Input<string>[]>;
    gitRepository: pulumi.Input<string>;
    kustomizationFilePath?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    targetBasedKustomization?: pulumi.Input<boolean>;
}
