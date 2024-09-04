// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ResultCodeMap extends pulumi.CustomResource {
    /**
     * Get an existing ResultCodeMap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ResultCodeMapState, opts?: pulumi.CustomResourceOptions): ResultCodeMap {
        return new ResultCodeMap(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/resultCodeMap:ResultCodeMap';

    /**
     * Returns true if the given object is an instance of ResultCodeMap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ResultCodeMap {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ResultCodeMap.__pulumiType;
    }

    /**
     * Specifies the result code that should be returned if a bind attempt fails because the user's account is locked as a
     * result of too many failed authentication attempts.
     */
    public readonly bindAccountLockedResultCode!: pulumi.Output<number>;
    /**
     * Specifies the result code that should be returned if a password-based bind attempt fails because the target user entry
     * does not have a password.
     */
    public readonly bindMissingPasswordResultCode!: pulumi.Output<number>;
    /**
     * Specifies the result code that should be returned if a bind attempt fails because the target user entry does not exist
     * in the server.
     */
    public readonly bindMissingUserResultCode!: pulumi.Output<number>;
    /**
     * A description for this Result Code Map
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Name of this config object.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.ResultCodeMapRequiredAction[]>;
    /**
     * Specifies the result code that should be returned if a generic error occurs within the server.
     */
    public readonly serverErrorResultCode!: pulumi.Output<number>;
    /**
     * The type of Result Code Map resource. Options are ['result-code-map']
     */
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a ResultCodeMap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ResultCodeMapArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ResultCodeMapArgs | ResultCodeMapState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ResultCodeMapState | undefined;
            resourceInputs["bindAccountLockedResultCode"] = state ? state.bindAccountLockedResultCode : undefined;
            resourceInputs["bindMissingPasswordResultCode"] = state ? state.bindMissingPasswordResultCode : undefined;
            resourceInputs["bindMissingUserResultCode"] = state ? state.bindMissingUserResultCode : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["serverErrorResultCode"] = state ? state.serverErrorResultCode : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as ResultCodeMapArgs | undefined;
            resourceInputs["bindAccountLockedResultCode"] = args ? args.bindAccountLockedResultCode : undefined;
            resourceInputs["bindMissingPasswordResultCode"] = args ? args.bindMissingPasswordResultCode : undefined;
            resourceInputs["bindMissingUserResultCode"] = args ? args.bindMissingUserResultCode : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["serverErrorResultCode"] = args ? args.serverErrorResultCode : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ResultCodeMap.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ResultCodeMap resources.
 */
export interface ResultCodeMapState {
    /**
     * Specifies the result code that should be returned if a bind attempt fails because the user's account is locked as a
     * result of too many failed authentication attempts.
     */
    bindAccountLockedResultCode?: pulumi.Input<number>;
    /**
     * Specifies the result code that should be returned if a password-based bind attempt fails because the target user entry
     * does not have a password.
     */
    bindMissingPasswordResultCode?: pulumi.Input<number>;
    /**
     * Specifies the result code that should be returned if a bind attempt fails because the target user entry does not exist
     * in the server.
     */
    bindMissingUserResultCode?: pulumi.Input<number>;
    /**
     * A description for this Result Code Map
     */
    description?: pulumi.Input<string>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.ResultCodeMapRequiredAction>[]>;
    /**
     * Specifies the result code that should be returned if a generic error occurs within the server.
     */
    serverErrorResultCode?: pulumi.Input<number>;
    /**
     * The type of Result Code Map resource. Options are ['result-code-map']
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ResultCodeMap resource.
 */
export interface ResultCodeMapArgs {
    /**
     * Specifies the result code that should be returned if a bind attempt fails because the user's account is locked as a
     * result of too many failed authentication attempts.
     */
    bindAccountLockedResultCode?: pulumi.Input<number>;
    /**
     * Specifies the result code that should be returned if a password-based bind attempt fails because the target user entry
     * does not have a password.
     */
    bindMissingPasswordResultCode?: pulumi.Input<number>;
    /**
     * Specifies the result code that should be returned if a bind attempt fails because the target user entry does not exist
     * in the server.
     */
    bindMissingUserResultCode?: pulumi.Input<number>;
    /**
     * A description for this Result Code Map
     */
    description?: pulumi.Input<string>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Specifies the result code that should be returned if a generic error occurs within the server.
     */
    serverErrorResultCode?: pulumi.Input<number>;
    /**
     * The type of Result Code Map resource. Options are ['result-code-map']
     */
    type?: pulumi.Input<string>;
}
