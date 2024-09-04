// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Crl extends pulumi.CustomResource {
    /**
     * Get an existing Crl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CrlState, opts?: pulumi.CustomResourceOptions): Crl {
        return new Crl(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'volterra:index/crl:Crl';

    /**
     * Returns true if the given object is an instance of Crl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Crl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Crl.__pulumiType;
    }

    public readonly annotations!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly disable!: pulumi.Output<boolean | undefined>;
    public readonly httpAccesses!: pulumi.Output<outputs.CrlHttpAccess[] | undefined>;
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly namespace!: pulumi.Output<string>;
    public readonly refreshInterval!: pulumi.Output<number | undefined>;
    public readonly serverAddress!: pulumi.Output<string>;
    public readonly serverPort!: pulumi.Output<number | undefined>;
    public readonly timeout!: pulumi.Output<number | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly verifyAllCertsWithCrl!: pulumi.Output<boolean | undefined>;

    /**
     * Create a Crl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CrlArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CrlArgs | CrlState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CrlState | undefined;
            resourceInputs["annotations"] = state ? state.annotations : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["disable"] = state ? state.disable : undefined;
            resourceInputs["httpAccesses"] = state ? state.httpAccesses : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["refreshInterval"] = state ? state.refreshInterval : undefined;
            resourceInputs["serverAddress"] = state ? state.serverAddress : undefined;
            resourceInputs["serverPort"] = state ? state.serverPort : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
            resourceInputs["verifyAllCertsWithCrl"] = state ? state.verifyAllCertsWithCrl : undefined;
        } else {
            const args = argsOrState as CrlArgs | undefined;
            if ((!args || args.namespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespace'");
            }
            if ((!args || args.serverAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serverAddress'");
            }
            resourceInputs["annotations"] = args ? args.annotations : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["disable"] = args ? args.disable : undefined;
            resourceInputs["httpAccesses"] = args ? args.httpAccesses : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["refreshInterval"] = args ? args.refreshInterval : undefined;
            resourceInputs["serverAddress"] = args ? args.serverAddress : undefined;
            resourceInputs["serverPort"] = args ? args.serverPort : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
            resourceInputs["verifyAllCertsWithCrl"] = args ? args.verifyAllCertsWithCrl : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Crl.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Crl resources.
 */
export interface CrlState {
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    disable?: pulumi.Input<boolean>;
    httpAccesses?: pulumi.Input<pulumi.Input<inputs.CrlHttpAccess>[]>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    namespace?: pulumi.Input<string>;
    refreshInterval?: pulumi.Input<number>;
    serverAddress?: pulumi.Input<string>;
    serverPort?: pulumi.Input<number>;
    timeout?: pulumi.Input<number>;
    /**
     * @deprecated Deprecated
     */
    verifyAllCertsWithCrl?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a Crl resource.
 */
export interface CrlArgs {
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    description?: pulumi.Input<string>;
    disable?: pulumi.Input<boolean>;
    httpAccesses?: pulumi.Input<pulumi.Input<inputs.CrlHttpAccess>[]>;
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    name?: pulumi.Input<string>;
    namespace: pulumi.Input<string>;
    refreshInterval?: pulumi.Input<number>;
    serverAddress: pulumi.Input<string>;
    serverPort?: pulumi.Input<number>;
    timeout?: pulumi.Input<number>;
    /**
     * @deprecated Deprecated
     */
    verifyAllCertsWithCrl?: pulumi.Input<boolean>;
}
