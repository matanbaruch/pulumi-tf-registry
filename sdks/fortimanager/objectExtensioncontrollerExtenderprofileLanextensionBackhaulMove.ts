// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMove extends pulumi.CustomResource {
    /**
     * Get an existing ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMove resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMoveState, opts?: pulumi.CustomResourceOptions): ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMove {
        return new ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMove(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectExtensioncontrollerExtenderprofileLanextensionBackhaulMove:ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMove';

    /**
     * Returns true if the given object is an instance of ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMove.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMove {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMove.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly backhaul!: pulumi.Output<string>;
    public readonly extenderProfile!: pulumi.Output<string>;
    public readonly option!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly statePos!: pulumi.Output<string>;
    public readonly target!: pulumi.Output<string>;

    /**
     * Create a ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMove resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMoveArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMoveArgs | ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMoveState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMoveState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["backhaul"] = state ? state.backhaul : undefined;
            resourceInputs["extenderProfile"] = state ? state.extenderProfile : undefined;
            resourceInputs["option"] = state ? state.option : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["statePos"] = state ? state.statePos : undefined;
            resourceInputs["target"] = state ? state.target : undefined;
        } else {
            const args = argsOrState as ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMoveArgs | undefined;
            if ((!args || args.backhaul === undefined) && !opts.urn) {
                throw new Error("Missing required property 'backhaul'");
            }
            if ((!args || args.extenderProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'extenderProfile'");
            }
            if ((!args || args.option === undefined) && !opts.urn) {
                throw new Error("Missing required property 'option'");
            }
            if ((!args || args.target === undefined) && !opts.urn) {
                throw new Error("Missing required property 'target'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["backhaul"] = args ? args.backhaul : undefined;
            resourceInputs["extenderProfile"] = args ? args.extenderProfile : undefined;
            resourceInputs["option"] = args ? args.option : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["statePos"] = args ? args.statePos : undefined;
            resourceInputs["target"] = args ? args.target : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMove.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMove resources.
 */
export interface ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMoveState {
    adom?: pulumi.Input<string>;
    backhaul?: pulumi.Input<string>;
    extenderProfile?: pulumi.Input<string>;
    option?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    statePos?: pulumi.Input<string>;
    target?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMove resource.
 */
export interface ObjectExtensioncontrollerExtenderprofileLanextensionBackhaulMoveArgs {
    adom?: pulumi.Input<string>;
    backhaul: pulumi.Input<string>;
    extenderProfile: pulumi.Input<string>;
    option: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    statePos?: pulumi.Input<string>;
    target: pulumi.Input<string>;
}
