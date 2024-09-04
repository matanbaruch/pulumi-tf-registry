// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Jwtserverprofile extends pulumi.CustomResource {
    /**
     * Get an existing Jwtserverprofile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: JwtserverprofileState, opts?: pulumi.CustomResourceOptions): Jwtserverprofile {
        return new Jwtserverprofile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'avi:index/jwtserverprofile:Jwtserverprofile';

    /**
     * Returns true if the given object is an instance of Jwtserverprofile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Jwtserverprofile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Jwtserverprofile.__pulumiType;
    }

    public readonly configpbAttributes!: pulumi.Output<outputs.JwtserverprofileConfigpbAttribute[] | undefined>;
    public readonly controllerInternalAuths!: pulumi.Output<outputs.JwtserverprofileControllerInternalAuth[] | undefined>;
    public readonly isFederated!: pulumi.Output<string | undefined>;
    public readonly issuer!: pulumi.Output<string>;
    public readonly jwksKeys!: pulumi.Output<string>;
    public readonly jwtProfileType!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly tenantRef!: pulumi.Output<string>;
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Jwtserverprofile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: JwtserverprofileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: JwtserverprofileArgs | JwtserverprofileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as JwtserverprofileState | undefined;
            resourceInputs["configpbAttributes"] = state ? state.configpbAttributes : undefined;
            resourceInputs["controllerInternalAuths"] = state ? state.controllerInternalAuths : undefined;
            resourceInputs["isFederated"] = state ? state.isFederated : undefined;
            resourceInputs["issuer"] = state ? state.issuer : undefined;
            resourceInputs["jwksKeys"] = state ? state.jwksKeys : undefined;
            resourceInputs["jwtProfileType"] = state ? state.jwtProfileType : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tenantRef"] = state ? state.tenantRef : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as JwtserverprofileArgs | undefined;
            resourceInputs["configpbAttributes"] = args ? args.configpbAttributes : undefined;
            resourceInputs["controllerInternalAuths"] = args ? args.controllerInternalAuths : undefined;
            resourceInputs["isFederated"] = args ? args.isFederated : undefined;
            resourceInputs["issuer"] = args ? args.issuer : undefined;
            resourceInputs["jwksKeys"] = args ? args.jwksKeys : undefined;
            resourceInputs["jwtProfileType"] = args ? args.jwtProfileType : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tenantRef"] = args ? args.tenantRef : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Jwtserverprofile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Jwtserverprofile resources.
 */
export interface JwtserverprofileState {
    configpbAttributes?: pulumi.Input<pulumi.Input<inputs.JwtserverprofileConfigpbAttribute>[]>;
    controllerInternalAuths?: pulumi.Input<pulumi.Input<inputs.JwtserverprofileControllerInternalAuth>[]>;
    isFederated?: pulumi.Input<string>;
    issuer?: pulumi.Input<string>;
    jwksKeys?: pulumi.Input<string>;
    jwtProfileType?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Jwtserverprofile resource.
 */
export interface JwtserverprofileArgs {
    configpbAttributes?: pulumi.Input<pulumi.Input<inputs.JwtserverprofileConfigpbAttribute>[]>;
    controllerInternalAuths?: pulumi.Input<pulumi.Input<inputs.JwtserverprofileControllerInternalAuth>[]>;
    isFederated?: pulumi.Input<string>;
    issuer?: pulumi.Input<string>;
    jwksKeys?: pulumi.Input<string>;
    jwtProfileType?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
