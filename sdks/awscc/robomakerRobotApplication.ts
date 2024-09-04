// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RobomakerRobotApplication extends pulumi.CustomResource {
    /**
     * Get an existing RobomakerRobotApplication resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RobomakerRobotApplicationState, opts?: pulumi.CustomResourceOptions): RobomakerRobotApplication {
        return new RobomakerRobotApplication(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/robomakerRobotApplication:RobomakerRobotApplication';

    /**
     * Returns true if the given object is an instance of RobomakerRobotApplication.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RobomakerRobotApplication {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RobomakerRobotApplication.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * The revision ID of robot application.
     */
    public readonly currentRevisionId!: pulumi.Output<string>;
    /**
     * The URI of the Docker image for the robot application.
     */
    public readonly environment!: pulumi.Output<string>;
    /**
     * The name of the robot application.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The robot software suite used by the robot application.
     */
    public readonly robotSoftwareSuite!: pulumi.Output<outputs.RobomakerRobotApplicationRobotSoftwareSuite>;
    /**
     * The sources of the robot application.
     */
    public readonly sources!: pulumi.Output<outputs.RobomakerRobotApplicationSource[]>;
    /**
     * A key-value pair to associate with a resource.
     */
    public readonly tags!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a RobomakerRobotApplication resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RobomakerRobotApplicationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RobomakerRobotApplicationArgs | RobomakerRobotApplicationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RobomakerRobotApplicationState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["currentRevisionId"] = state ? state.currentRevisionId : undefined;
            resourceInputs["environment"] = state ? state.environment : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["robotSoftwareSuite"] = state ? state.robotSoftwareSuite : undefined;
            resourceInputs["sources"] = state ? state.sources : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as RobomakerRobotApplicationArgs | undefined;
            if ((!args || args.robotSoftwareSuite === undefined) && !opts.urn) {
                throw new Error("Missing required property 'robotSoftwareSuite'");
            }
            resourceInputs["currentRevisionId"] = args ? args.currentRevisionId : undefined;
            resourceInputs["environment"] = args ? args.environment : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["robotSoftwareSuite"] = args ? args.robotSoftwareSuite : undefined;
            resourceInputs["sources"] = args ? args.sources : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RobomakerRobotApplication.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RobomakerRobotApplication resources.
 */
export interface RobomakerRobotApplicationState {
    arn?: pulumi.Input<string>;
    /**
     * The revision ID of robot application.
     */
    currentRevisionId?: pulumi.Input<string>;
    /**
     * The URI of the Docker image for the robot application.
     */
    environment?: pulumi.Input<string>;
    /**
     * The name of the robot application.
     */
    name?: pulumi.Input<string>;
    /**
     * The robot software suite used by the robot application.
     */
    robotSoftwareSuite?: pulumi.Input<inputs.RobomakerRobotApplicationRobotSoftwareSuite>;
    /**
     * The sources of the robot application.
     */
    sources?: pulumi.Input<pulumi.Input<inputs.RobomakerRobotApplicationSource>[]>;
    /**
     * A key-value pair to associate with a resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a RobomakerRobotApplication resource.
 */
export interface RobomakerRobotApplicationArgs {
    /**
     * The revision ID of robot application.
     */
    currentRevisionId?: pulumi.Input<string>;
    /**
     * The URI of the Docker image for the robot application.
     */
    environment?: pulumi.Input<string>;
    /**
     * The name of the robot application.
     */
    name?: pulumi.Input<string>;
    /**
     * The robot software suite used by the robot application.
     */
    robotSoftwareSuite: pulumi.Input<inputs.RobomakerRobotApplicationRobotSoftwareSuite>;
    /**
     * The sources of the robot application.
     */
    sources?: pulumi.Input<pulumi.Input<inputs.RobomakerRobotApplicationSource>[]>;
    /**
     * A key-value pair to associate with a resource.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
