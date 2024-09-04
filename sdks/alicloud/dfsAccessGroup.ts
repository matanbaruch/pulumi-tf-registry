// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DfsAccessGroup extends pulumi.CustomResource {
    /**
     * Get an existing DfsAccessGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DfsAccessGroupState, opts?: pulumi.CustomResourceOptions): DfsAccessGroup {
        return new DfsAccessGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/dfsAccessGroup:DfsAccessGroup';

    /**
     * Returns true if the given object is an instance of DfsAccessGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DfsAccessGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DfsAccessGroup.__pulumiType;
    }

    public readonly accessGroupName!: pulumi.Output<string>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly networkType!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DfsAccessGroupTimeouts | undefined>;

    /**
     * Create a DfsAccessGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DfsAccessGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DfsAccessGroupArgs | DfsAccessGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DfsAccessGroupState | undefined;
            resourceInputs["accessGroupName"] = state ? state.accessGroupName : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["networkType"] = state ? state.networkType : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DfsAccessGroupArgs | undefined;
            if ((!args || args.accessGroupName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'accessGroupName'");
            }
            if ((!args || args.networkType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networkType'");
            }
            resourceInputs["accessGroupName"] = args ? args.accessGroupName : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["networkType"] = args ? args.networkType : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DfsAccessGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DfsAccessGroup resources.
 */
export interface DfsAccessGroupState {
    accessGroupName?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    networkType?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DfsAccessGroupTimeouts>;
}

/**
 * The set of arguments for constructing a DfsAccessGroup resource.
 */
export interface DfsAccessGroupArgs {
    accessGroupName: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    networkType: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DfsAccessGroupTimeouts>;
}
