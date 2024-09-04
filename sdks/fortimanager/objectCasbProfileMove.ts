// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectCasbProfileMove extends pulumi.CustomResource {
    /**
     * Get an existing ObjectCasbProfileMove resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectCasbProfileMoveState, opts?: pulumi.CustomResourceOptions): ObjectCasbProfileMove {
        return new ObjectCasbProfileMove(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectCasbProfileMove:ObjectCasbProfileMove';

    /**
     * Returns true if the given object is an instance of ObjectCasbProfileMove.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectCasbProfileMove {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectCasbProfileMove.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly option!: pulumi.Output<string>;
    public readonly profile!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly statePos!: pulumi.Output<string>;
    public readonly target!: pulumi.Output<string>;

    /**
     * Create a ObjectCasbProfileMove resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectCasbProfileMoveArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectCasbProfileMoveArgs | ObjectCasbProfileMoveState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectCasbProfileMoveState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["option"] = state ? state.option : undefined;
            resourceInputs["profile"] = state ? state.profile : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["statePos"] = state ? state.statePos : undefined;
            resourceInputs["target"] = state ? state.target : undefined;
        } else {
            const args = argsOrState as ObjectCasbProfileMoveArgs | undefined;
            if ((!args || args.option === undefined) && !opts.urn) {
                throw new Error("Missing required property 'option'");
            }
            if ((!args || args.profile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profile'");
            }
            if ((!args || args.target === undefined) && !opts.urn) {
                throw new Error("Missing required property 'target'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["option"] = args ? args.option : undefined;
            resourceInputs["profile"] = args ? args.profile : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["statePos"] = args ? args.statePos : undefined;
            resourceInputs["target"] = args ? args.target : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectCasbProfileMove.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectCasbProfileMove resources.
 */
export interface ObjectCasbProfileMoveState {
    adom?: pulumi.Input<string>;
    option?: pulumi.Input<string>;
    profile?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    statePos?: pulumi.Input<string>;
    target?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectCasbProfileMove resource.
 */
export interface ObjectCasbProfileMoveArgs {
    adom?: pulumi.Input<string>;
    option: pulumi.Input<string>;
    profile: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    statePos?: pulumi.Input<string>;
    target: pulumi.Input<string>;
}
