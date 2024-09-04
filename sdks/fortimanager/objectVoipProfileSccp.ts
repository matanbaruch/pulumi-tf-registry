// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectVoipProfileSccp extends pulumi.CustomResource {
    /**
     * Get an existing ObjectVoipProfileSccp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectVoipProfileSccpState, opts?: pulumi.CustomResourceOptions): ObjectVoipProfileSccp {
        return new ObjectVoipProfileSccp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectVoipProfileSccp:ObjectVoipProfileSccp';

    /**
     * Returns true if the given object is an instance of ObjectVoipProfileSccp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectVoipProfileSccp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectVoipProfileSccp.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly blockMcast!: pulumi.Output<string>;
    public readonly logCallSummary!: pulumi.Output<string>;
    public readonly logViolations!: pulumi.Output<string>;
    public readonly maxCalls!: pulumi.Output<number | undefined>;
    public readonly profile!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly status!: pulumi.Output<string>;
    public readonly verifyHeader!: pulumi.Output<string>;

    /**
     * Create a ObjectVoipProfileSccp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectVoipProfileSccpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectVoipProfileSccpArgs | ObjectVoipProfileSccpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectVoipProfileSccpState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["blockMcast"] = state ? state.blockMcast : undefined;
            resourceInputs["logCallSummary"] = state ? state.logCallSummary : undefined;
            resourceInputs["logViolations"] = state ? state.logViolations : undefined;
            resourceInputs["maxCalls"] = state ? state.maxCalls : undefined;
            resourceInputs["profile"] = state ? state.profile : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["verifyHeader"] = state ? state.verifyHeader : undefined;
        } else {
            const args = argsOrState as ObjectVoipProfileSccpArgs | undefined;
            if ((!args || args.profile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profile'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["blockMcast"] = args ? args.blockMcast : undefined;
            resourceInputs["logCallSummary"] = args ? args.logCallSummary : undefined;
            resourceInputs["logViolations"] = args ? args.logViolations : undefined;
            resourceInputs["maxCalls"] = args ? args.maxCalls : undefined;
            resourceInputs["profile"] = args ? args.profile : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["verifyHeader"] = args ? args.verifyHeader : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectVoipProfileSccp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectVoipProfileSccp resources.
 */
export interface ObjectVoipProfileSccpState {
    adom?: pulumi.Input<string>;
    blockMcast?: pulumi.Input<string>;
    logCallSummary?: pulumi.Input<string>;
    logViolations?: pulumi.Input<string>;
    maxCalls?: pulumi.Input<number>;
    profile?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    verifyHeader?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectVoipProfileSccp resource.
 */
export interface ObjectVoipProfileSccpArgs {
    adom?: pulumi.Input<string>;
    blockMcast?: pulumi.Input<string>;
    logCallSummary?: pulumi.Input<string>;
    logViolations?: pulumi.Input<string>;
    maxCalls?: pulumi.Input<number>;
    profile: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    verifyHeader?: pulumi.Input<string>;
}
