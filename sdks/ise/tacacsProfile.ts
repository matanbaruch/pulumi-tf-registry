// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class TacacsProfile extends pulumi.CustomResource {
    /**
     * Get an existing TacacsProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TacacsProfileState, opts?: pulumi.CustomResourceOptions): TacacsProfile {
        return new TacacsProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ise:index/tacacsProfile:TacacsProfile';

    /**
     * Returns true if the given object is an instance of TacacsProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is TacacsProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === TacacsProfile.__pulumiType;
    }

    /**
     * Description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The name of the TACACS profile
     */
    public readonly name!: pulumi.Output<string>;
    public readonly sessionAttributes!: pulumi.Output<outputs.TacacsProfileSessionAttribute[] | undefined>;

    /**
     * Create a TacacsProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TacacsProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: TacacsProfileArgs | TacacsProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as TacacsProfileState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["sessionAttributes"] = state ? state.sessionAttributes : undefined;
        } else {
            const args = argsOrState as TacacsProfileArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["sessionAttributes"] = args ? args.sessionAttributes : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(TacacsProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering TacacsProfile resources.
 */
export interface TacacsProfileState {
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the TACACS profile
     */
    name?: pulumi.Input<string>;
    sessionAttributes?: pulumi.Input<pulumi.Input<inputs.TacacsProfileSessionAttribute>[]>;
}

/**
 * The set of arguments for constructing a TacacsProfile resource.
 */
export interface TacacsProfileArgs {
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the TACACS profile
     */
    name?: pulumi.Input<string>;
    sessionAttributes?: pulumi.Input<pulumi.Input<inputs.TacacsProfileSessionAttribute>[]>;
}
