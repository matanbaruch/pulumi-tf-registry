// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SmartGroup extends pulumi.CustomResource {
    /**
     * Get an existing SmartGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SmartGroupState, opts?: pulumi.CustomResourceOptions): SmartGroup {
        return new SmartGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aviatrix:index/smartGroup:SmartGroup';

    /**
     * Returns true if the given object is an instance of SmartGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SmartGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SmartGroup.__pulumiType;
    }

    /**
     * Name of the Smart Group.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * List of match expressions for the Smart Group.
     */
    public readonly selector!: pulumi.Output<outputs.SmartGroupSelector>;
    /**
     * UUID of the Smart Group.
     */
    public /*out*/ readonly uuid!: pulumi.Output<string>;

    /**
     * Create a SmartGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SmartGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SmartGroupArgs | SmartGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SmartGroupState | undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["selector"] = state ? state.selector : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as SmartGroupArgs | undefined;
            if ((!args || args.selector === undefined) && !opts.urn) {
                throw new Error("Missing required property 'selector'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["selector"] = args ? args.selector : undefined;
            resourceInputs["uuid"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SmartGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SmartGroup resources.
 */
export interface SmartGroupState {
    /**
     * Name of the Smart Group.
     */
    name?: pulumi.Input<string>;
    /**
     * List of match expressions for the Smart Group.
     */
    selector?: pulumi.Input<inputs.SmartGroupSelector>;
    /**
     * UUID of the Smart Group.
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SmartGroup resource.
 */
export interface SmartGroupArgs {
    /**
     * Name of the Smart Group.
     */
    name?: pulumi.Input<string>;
    /**
     * List of match expressions for the Smart Group.
     */
    selector: pulumi.Input<inputs.SmartGroupSelector>;
}
