// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ProjectJobTokenScope extends pulumi.CustomResource {
    /**
     * Get an existing ProjectJobTokenScope resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProjectJobTokenScopeState, opts?: pulumi.CustomResourceOptions): ProjectJobTokenScope {
        return new ProjectJobTokenScope(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'gitlab:index/projectJobTokenScope:ProjectJobTokenScope';

    /**
     * Returns true if the given object is an instance of ProjectJobTokenScope.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ProjectJobTokenScope {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ProjectJobTokenScope.__pulumiType;
    }

    /**
     * The ID or full path of the project.
     */
    public readonly project!: pulumi.Output<string>;
    /**
     * The ID of the project that is in the CI/CD job token inbound allowlist.
     */
    public readonly targetProjectId!: pulumi.Output<number>;

    /**
     * Create a ProjectJobTokenScope resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectJobTokenScopeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProjectJobTokenScopeArgs | ProjectJobTokenScopeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ProjectJobTokenScopeState | undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["targetProjectId"] = state ? state.targetProjectId : undefined;
        } else {
            const args = argsOrState as ProjectJobTokenScopeArgs | undefined;
            if ((!args || args.project === undefined) && !opts.urn) {
                throw new Error("Missing required property 'project'");
            }
            if ((!args || args.targetProjectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'targetProjectId'");
            }
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["targetProjectId"] = args ? args.targetProjectId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ProjectJobTokenScope.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ProjectJobTokenScope resources.
 */
export interface ProjectJobTokenScopeState {
    /**
     * The ID or full path of the project.
     */
    project?: pulumi.Input<string>;
    /**
     * The ID of the project that is in the CI/CD job token inbound allowlist.
     */
    targetProjectId?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ProjectJobTokenScope resource.
 */
export interface ProjectJobTokenScopeArgs {
    /**
     * The ID or full path of the project.
     */
    project: pulumi.Input<string>;
    /**
     * The ID of the project that is in the CI/CD job token inbound allowlist.
     */
    targetProjectId: pulumi.Input<number>;
}
