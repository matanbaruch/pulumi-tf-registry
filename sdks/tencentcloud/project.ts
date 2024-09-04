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
    public static readonly __pulumiType = 'tencentcloud:index/project:Project';

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
     * Create time.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Uin of creator.
     */
    public /*out*/ readonly creatorUin!: pulumi.Output<number>;
    /**
     * If disable project. 1 means disable, 0 means enable. Default 0.
     */
    public readonly disable!: pulumi.Output<number | undefined>;
    /**
     * Description of project.
     */
    public readonly info!: pulumi.Output<string | undefined>;
    /**
     * Name of project.
     */
    public readonly projectName!: pulumi.Output<string>;

    /**
     * Create a Project resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ProjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ProjectArgs | ProjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ProjectState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["creatorUin"] = state ? state.creatorUin : undefined;
            resourceInputs["disable"] = state ? state.disable : undefined;
            resourceInputs["info"] = state ? state.info : undefined;
            resourceInputs["projectName"] = state ? state.projectName : undefined;
        } else {
            const args = argsOrState as ProjectArgs | undefined;
            if ((!args || args.projectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectName'");
            }
            resourceInputs["disable"] = args ? args.disable : undefined;
            resourceInputs["info"] = args ? args.info : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["creatorUin"] = undefined /*out*/;
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
     * Create time.
     */
    createTime?: pulumi.Input<string>;
    /**
     * Uin of creator.
     */
    creatorUin?: pulumi.Input<number>;
    /**
     * If disable project. 1 means disable, 0 means enable. Default 0.
     */
    disable?: pulumi.Input<number>;
    /**
     * Description of project.
     */
    info?: pulumi.Input<string>;
    /**
     * Name of project.
     */
    projectName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Project resource.
 */
export interface ProjectArgs {
    /**
     * If disable project. 1 means disable, 0 means enable. Default 0.
     */
    disable?: pulumi.Input<number>;
    /**
     * Description of project.
     */
    info?: pulumi.Input<string>;
    /**
     * Name of project.
     */
    projectName: pulumi.Input<string>;
}
