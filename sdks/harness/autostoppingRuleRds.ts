// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AutostoppingRuleRds extends pulumi.CustomResource {
    /**
     * Get an existing AutostoppingRuleRds resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AutostoppingRuleRdsState, opts?: pulumi.CustomResourceOptions): AutostoppingRuleRds {
        return new AutostoppingRuleRds(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'harness:index/autostoppingRuleRds:AutostoppingRuleRds';

    /**
     * Returns true if the given object is an instance of AutostoppingRuleRds.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AutostoppingRuleRds {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AutostoppingRuleRds.__pulumiType;
    }

    /**
     * Id of the cloud connector
     */
    public readonly cloudConnectorId!: pulumi.Output<string>;
    public readonly database!: pulumi.Output<outputs.AutostoppingRuleRdsDatabase>;
    /**
     * Dependent rules
     */
    public readonly depends!: pulumi.Output<outputs.AutostoppingRuleRdsDepend[] | undefined>;
    /**
     * Unique identifier of the resource
     */
    public /*out*/ readonly identifier!: pulumi.Output<number>;
    /**
     * Idle time in minutes. This is the time that the AutoStopping rule waits before stopping the idle instances.
     */
    public readonly idleTimeMins!: pulumi.Output<number | undefined>;
    /**
     * Name of the rule
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * TCP routing configuration
     */
    public readonly tcps!: pulumi.Output<outputs.AutostoppingRuleRdsTcp[] | undefined>;

    /**
     * Create a AutostoppingRuleRds resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AutostoppingRuleRdsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AutostoppingRuleRdsArgs | AutostoppingRuleRdsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AutostoppingRuleRdsState | undefined;
            resourceInputs["cloudConnectorId"] = state ? state.cloudConnectorId : undefined;
            resourceInputs["database"] = state ? state.database : undefined;
            resourceInputs["depends"] = state ? state.depends : undefined;
            resourceInputs["identifier"] = state ? state.identifier : undefined;
            resourceInputs["idleTimeMins"] = state ? state.idleTimeMins : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tcps"] = state ? state.tcps : undefined;
        } else {
            const args = argsOrState as AutostoppingRuleRdsArgs | undefined;
            if ((!args || args.cloudConnectorId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cloudConnectorId'");
            }
            if ((!args || args.database === undefined) && !opts.urn) {
                throw new Error("Missing required property 'database'");
            }
            resourceInputs["cloudConnectorId"] = args ? args.cloudConnectorId : undefined;
            resourceInputs["database"] = args ? args.database : undefined;
            resourceInputs["depends"] = args ? args.depends : undefined;
            resourceInputs["idleTimeMins"] = args ? args.idleTimeMins : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tcps"] = args ? args.tcps : undefined;
            resourceInputs["identifier"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AutostoppingRuleRds.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AutostoppingRuleRds resources.
 */
export interface AutostoppingRuleRdsState {
    /**
     * Id of the cloud connector
     */
    cloudConnectorId?: pulumi.Input<string>;
    database?: pulumi.Input<inputs.AutostoppingRuleRdsDatabase>;
    /**
     * Dependent rules
     */
    depends?: pulumi.Input<pulumi.Input<inputs.AutostoppingRuleRdsDepend>[]>;
    /**
     * Unique identifier of the resource
     */
    identifier?: pulumi.Input<number>;
    /**
     * Idle time in minutes. This is the time that the AutoStopping rule waits before stopping the idle instances.
     */
    idleTimeMins?: pulumi.Input<number>;
    /**
     * Name of the rule
     */
    name?: pulumi.Input<string>;
    /**
     * TCP routing configuration
     */
    tcps?: pulumi.Input<pulumi.Input<inputs.AutostoppingRuleRdsTcp>[]>;
}

/**
 * The set of arguments for constructing a AutostoppingRuleRds resource.
 */
export interface AutostoppingRuleRdsArgs {
    /**
     * Id of the cloud connector
     */
    cloudConnectorId: pulumi.Input<string>;
    database: pulumi.Input<inputs.AutostoppingRuleRdsDatabase>;
    /**
     * Dependent rules
     */
    depends?: pulumi.Input<pulumi.Input<inputs.AutostoppingRuleRdsDepend>[]>;
    /**
     * Idle time in minutes. This is the time that the AutoStopping rule waits before stopping the idle instances.
     */
    idleTimeMins?: pulumi.Input<number>;
    /**
     * Name of the rule
     */
    name?: pulumi.Input<string>;
    /**
     * TCP routing configuration
     */
    tcps?: pulumi.Input<pulumi.Input<inputs.AutostoppingRuleRdsTcp>[]>;
}
