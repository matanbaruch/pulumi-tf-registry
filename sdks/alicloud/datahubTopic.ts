// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DatahubTopic extends pulumi.CustomResource {
    /**
     * Get an existing DatahubTopic resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatahubTopicState, opts?: pulumi.CustomResourceOptions): DatahubTopic {
        return new DatahubTopic(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/datahubTopic:DatahubTopic';

    /**
     * Returns true if the given object is an instance of DatahubTopic.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatahubTopic {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatahubTopic.__pulumiType;
    }

    public readonly comment!: pulumi.Output<string | undefined>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public /*out*/ readonly lastModifyTime!: pulumi.Output<string>;
    public readonly lifeCycle!: pulumi.Output<number | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly projectName!: pulumi.Output<string>;
    public readonly recordSchema!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly recordType!: pulumi.Output<string | undefined>;
    public readonly shardCount!: pulumi.Output<number | undefined>;

    /**
     * Create a DatahubTopic resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatahubTopicArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatahubTopicArgs | DatahubTopicState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatahubTopicState | undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["lastModifyTime"] = state ? state.lastModifyTime : undefined;
            resourceInputs["lifeCycle"] = state ? state.lifeCycle : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["projectName"] = state ? state.projectName : undefined;
            resourceInputs["recordSchema"] = state ? state.recordSchema : undefined;
            resourceInputs["recordType"] = state ? state.recordType : undefined;
            resourceInputs["shardCount"] = state ? state.shardCount : undefined;
        } else {
            const args = argsOrState as DatahubTopicArgs | undefined;
            if ((!args || args.projectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectName'");
            }
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["lifeCycle"] = args ? args.lifeCycle : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["projectName"] = args ? args.projectName : undefined;
            resourceInputs["recordSchema"] = args ? args.recordSchema : undefined;
            resourceInputs["recordType"] = args ? args.recordType : undefined;
            resourceInputs["shardCount"] = args ? args.shardCount : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["lastModifyTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatahubTopic.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatahubTopic resources.
 */
export interface DatahubTopicState {
    comment?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    lastModifyTime?: pulumi.Input<string>;
    lifeCycle?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    projectName?: pulumi.Input<string>;
    recordSchema?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    recordType?: pulumi.Input<string>;
    shardCount?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a DatahubTopic resource.
 */
export interface DatahubTopicArgs {
    comment?: pulumi.Input<string>;
    lifeCycle?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    projectName: pulumi.Input<string>;
    recordSchema?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    recordType?: pulumi.Input<string>;
    shardCount?: pulumi.Input<number>;
}
