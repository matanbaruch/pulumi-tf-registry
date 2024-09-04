// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Securitymanagerdata extends pulumi.CustomResource {
    /**
     * Get an existing Securitymanagerdata resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SecuritymanagerdataState, opts?: pulumi.CustomResourceOptions): Securitymanagerdata {
        return new Securitymanagerdata(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'avi:index/securitymanagerdata:Securitymanagerdata';

    /**
     * Returns true if the given object is an instance of Securitymanagerdata.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Securitymanagerdata {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Securitymanagerdata.__pulumiType;
    }

    public readonly appLearningInfos!: pulumi.Output<outputs.SecuritymanagerdataAppLearningInfo[] | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly tenantRef!: pulumi.Output<string>;
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Securitymanagerdata resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SecuritymanagerdataArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SecuritymanagerdataArgs | SecuritymanagerdataState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SecuritymanagerdataState | undefined;
            resourceInputs["appLearningInfos"] = state ? state.appLearningInfos : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["tenantRef"] = state ? state.tenantRef : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as SecuritymanagerdataArgs | undefined;
            resourceInputs["appLearningInfos"] = args ? args.appLearningInfos : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["tenantRef"] = args ? args.tenantRef : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Securitymanagerdata.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Securitymanagerdata resources.
 */
export interface SecuritymanagerdataState {
    appLearningInfos?: pulumi.Input<pulumi.Input<inputs.SecuritymanagerdataAppLearningInfo>[]>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Securitymanagerdata resource.
 */
export interface SecuritymanagerdataArgs {
    appLearningInfos?: pulumi.Input<pulumi.Input<inputs.SecuritymanagerdataAppLearningInfo>[]>;
    name?: pulumi.Input<string>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
