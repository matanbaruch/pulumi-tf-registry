// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GroupEpicBoard extends pulumi.CustomResource {
    /**
     * Get an existing GroupEpicBoard resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GroupEpicBoardState, opts?: pulumi.CustomResourceOptions): GroupEpicBoard {
        return new GroupEpicBoard(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'gitlab:index/groupEpicBoard:GroupEpicBoard';

    /**
     * Returns true if the given object is an instance of GroupEpicBoard.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GroupEpicBoard {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GroupEpicBoard.__pulumiType;
    }

    /**
     * The ID or URL-encoded path of the group owned by the authenticated user.
     */
    public readonly group!: pulumi.Output<string>;
    /**
     * The list of epic board lists.
     */
    public readonly lists!: pulumi.Output<outputs.GroupEpicBoardList[] | undefined>;
    /**
     * The name of the board.
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a GroupEpicBoard resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GroupEpicBoardArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GroupEpicBoardArgs | GroupEpicBoardState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GroupEpicBoardState | undefined;
            resourceInputs["group"] = state ? state.group : undefined;
            resourceInputs["lists"] = state ? state.lists : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as GroupEpicBoardArgs | undefined;
            if ((!args || args.group === undefined) && !opts.urn) {
                throw new Error("Missing required property 'group'");
            }
            resourceInputs["group"] = args ? args.group : undefined;
            resourceInputs["lists"] = args ? args.lists : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GroupEpicBoard.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GroupEpicBoard resources.
 */
export interface GroupEpicBoardState {
    /**
     * The ID or URL-encoded path of the group owned by the authenticated user.
     */
    group?: pulumi.Input<string>;
    /**
     * The list of epic board lists.
     */
    lists?: pulumi.Input<pulumi.Input<inputs.GroupEpicBoardList>[]>;
    /**
     * The name of the board.
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a GroupEpicBoard resource.
 */
export interface GroupEpicBoardArgs {
    /**
     * The ID or URL-encoded path of the group owned by the authenticated user.
     */
    group: pulumi.Input<string>;
    /**
     * The list of epic board lists.
     */
    lists?: pulumi.Input<pulumi.Input<inputs.GroupEpicBoardList>[]>;
    /**
     * The name of the board.
     */
    name?: pulumi.Input<string>;
}
