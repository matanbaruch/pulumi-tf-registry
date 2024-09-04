// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Project extends pulumi.CustomResource {
    /**
     * Get an existing Project resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ProjectState, opts?: pulumi.CustomResourceOptions): Project {
        return new Project(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'codefresh:index/project:Project';

    /**
     * Returns true if the given object is an instance of Project.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Project {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Project.__pulumiType;
    }

    /**
     * Project level encrypted variables. Please note that drift will not be detected for encrypted variables
     */
    public readonly encryptedVariables!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The display name for the project.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A list of tags to mark a project for easy management and access control.
     */
    public readonly tags!: pulumi.Output<string[] | undefined>;
    /**
     * Project variables.
     */
    public readonly variables!: pulumi.Output<{[key: string]: string} | undefined>;

    /**
     * Create a Project resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProjectArgs | ProjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ProjectState | undefined;
            resourceInputs["encryptedVariables"] = state ? state.encryptedVariables : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["variables"] = state ? state.variables : undefined;
        } else {
            const args = argsOrState as ProjectArgs | undefined;
            resourceInputs["encryptedVariables"] = args ? args.encryptedVariables : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["variables"] = args ? args.variables : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Project.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Project resources.
 */
export interface ProjectState {
    /**
     * Project level encrypted variables. Please note that drift will not be detected for encrypted variables
     */
    encryptedVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The display name for the project.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of tags to mark a project for easy management and access control.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Project variables.
     */
    variables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a Project resource.
 */
export interface ProjectArgs {
    /**
     * Project level encrypted variables. Please note that drift will not be detected for encrypted variables
     */
    encryptedVariables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The display name for the project.
     */
    name?: pulumi.Input<string>;
    /**
     * A list of tags to mark a project for easy management and access control.
     */
    tags?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Project variables.
     */
    variables?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
